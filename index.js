// 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 <-- Emojis are just text (Unicode). Neat, right? ;).

// Remember: only imports from node's core libraries. For ex. node:fs

import { readFile } from 'fs';

// Read assets.json file
readFile('assets.json', (err, data) => {
    let index = 0;
    if (err) {
        console.error('assets.json file not available.');
        process.exit(1);
    }

    const assets = JSON.parse(data);

    // Array with keys of the object in assets.json file
    const moonPhasesArr = Object.keys(assets);

    // setInterval to change emoji every second
    const timer = setInterval(() => {

        // Get the current moon phase emoji
        const moonPhase = assets[moonPhasesArr[index]];
        console.log(moonPhase);

        // Increment index
        index = (index + 1) % moonPhasesArr.length;
    }, 1000);
});
