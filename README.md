# VARSHUVERSE — Premium Hybrid Edition

A cinematic galaxy + memory scrapbook birthday experience made with plain HTML, CSS and JavaScript.

## Run on Windows / VS Code
1. Extract the ZIP.
2. In VS Code choose **File → Open Folder...** and select `VARSHUVERSE-Premium`.
3. Open `index.html`.
4. Right-click inside it and choose **Open with Live Server** (or click **Go Live**).
5. Browser opens the site.

## Add your own photos
1. Copy photos into one of these folders:
   - `assets/photos/funny-moments/`
   - `assets/photos/selfies/`
   - `assets/photos/favorite-memories/`
   - `assets/photos/special-days/`
2. Open `script.js` and find `const photoAlbums = [`.
3. Add items using this format (edit filename/title/note):
   `{src:"assets/photos/funny-moments/photo1.jpg", category:"funny-moments", title:"Certified Pandhi moment", note:"Mana legendary overaction 😂"}`
4. Repeat for each photo. Supported categories are `funny-moments`, `selfies`, `favorite-memories`, and `special-days`.
5. Save `script.js`; Live Server should refresh the page.

## Add your background music
Place your own audio file at `assets/audio/varshu-bgm.mp3`. Use a file you have permission to use. Browsers require a click before audio can play, so click **Play our song**.

## Progress / privacy
Star progress is saved in localStorage on the current browser/device. Start Fresh clears the saved star progress. A static website does not privately protect photos: if you publish it, visitors who can access the site may see and save its photos. The riddle is playful, not security.

## Personalize text
Edit `chapters` and `letterLines` near the top of `script.js`. Search for `Varshu`, `Pandhi`, or `Satya` to customize messages.
