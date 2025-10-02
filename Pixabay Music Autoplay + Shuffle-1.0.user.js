// ==UserScript==
// @name         Pixabay Music Autoplay + Shuffle
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add Feature to Autoplay dan Shuffle Pixabay Music
// @author       L1145A1
// @match        https://pixabay.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 🎵 Input batas ID lagu
    const minId = 0;      // ID minimum
    const maxId = 999999;    // ID maksimum

    function generateNumericIdInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function redirectIf404() {
        if (document.title.includes('Error 404')) {
            console.log('Halaman 404 terdeteksi, mencoba ID baru...');
            const newId = generateNumericIdInRange(minId, maxId);
            setTimeout(() => {
                window.location.href = `https://pixabay.com/id/music/${newId}/`;
            }, 1000);
        }
    }

    redirectIf404();

    if (!document.title.includes('Error 404')) {
        function simulateClick(el) {
            if (!el) return;
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const event = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            el.dispatchEvent(event);
            console.log('Simulasi klik tombol play berhasil.');
        }

        function findPlayButton() {
            return document.querySelector('button[class*="playIcon"][class*="paused"]');
        }

        function autoplay() {
            const btn = findPlayButton();
            if (btn) {
                simulateClick(btn);
                return true;
            }
            return false;
        }

        function checkSongEnd() {
            const slider = document.querySelector('div[role="slider"][aria-valuenow="1"]');
            if (slider) {
                console.log('Lagu selesai, mengalihkan ke lagu acak...');
                const randomId = generateNumericIdInRange(minId, maxId);
                window.location.href = `https://pixabay.com/id/music/${randomId}/`;
            }
        }

        const playObserver = new MutationObserver(() => {
            if (autoplay()) playObserver.disconnect();
        });

        playObserver.observe(document.body, { childList: true, subtree: true });

        let playTries = 0;
        const maxPlayTries = 10;
        const playInterval = setInterval(() => {
            if (autoplay() || ++playTries >= maxPlayTries) clearInterval(playInterval);
        }, 1000);

        setInterval(() => {
            checkSongEnd();
        }, 2000);
    }
})();
