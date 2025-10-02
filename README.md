# Autoplay And Shuffle for Pixabay Music via Userscript

Pixabay Music is a great source of royalty-free tracks, but it lacks basic streaming features like autoplay and shuffle—features you'd expect from platforms like YouTube Music or Spotify.

This userscript adds those missing features by automatically playing music and redirecting to a random track when one ends or when a track ID is invalid (404). It transforms Pixabay Music into a lightweight, self-shuffling music stream.

---

## 🎧 Features

- **Autoplay**: Automatically plays the track when the page loads.
- **Shuffle**: Redirects to a random track after the current one ends.
- - **404 Not Found Handling**: If a generated track ID is not available (e.g. 404 or missing), the script automatically redirects to a new random ID track.
- **Custom ID Range**: Easily configure `minId` and `maxId` at the top of the script to control the range of track IDs.

---

## 🛠 Installation

1. **Install Tampermonkey** (or any userscript manager)  
   - [Tampermonkey for Chrome](https://tampermonkey.net/?ext=dhdg&browser=chrome)  
   - [Tampermonkey for Firefox](https://tampermonkey.net/?ext=dhdg&browser=firefox)

2. **Install the script**  
   - Copy the code from [`Pixabay Music Autoplay + Shuffle`](https://github.com/l1145a1/Autoplay-Shuffle-for-Pixabay-Music-via-Userscript)  
   - Create a new script in Tampermonkey and paste the code.

3. **Customize ID range (optional)**  
   - At the top of the script, modify:
     ```javascript
     const minId = 1000;
     const maxId = 999999;
     ```
   - This controls the range of random track IDs used for shuffle and recovery.

---

## 📄 License

This userscript is released under the **Creative Commons Zero v1.0 Universal (CC0-1.0)** license.  
You are free to use, modify, and distribute it without restriction—even for commercial purposes and without attribution.

While attribution is not required, it is always appreciated.  
If you find this script useful and wish to credit the author, feel free to link back to this repository or mention the original creator.

Learn more: [CC0 Legal Code](https://creativecommons.org/publicdomain/zero/1.0/legalcode)

---

## 💡 Notes

- This script assumes that Pixabay Music track URLs follow the format:  
  `https://pixabay.com/id/music/{id}/`
- Not all numeric IDs are valid. The script handles this by detecting 404 pages and retrying with a new random ID.
- You can tweak the logic to cache successful IDs or log failed attempts if needed.

---

Enjoy a seamless, shuffled listening experience on Pixabay Music!
