// 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 <-- Emojis are just text (Unicode). Neat, right? ;).

// Remember: only imports from node's core libraries. For ex. node:fs

import fs from "fs";

try {
  // Read the file and parse it
  const assets = JSON.parse(fs.readFileSync("assets.json"));
  //   Take the value of each key and store them in an array
  const moonPhases = Object.values(assets);

  let currentIndex = 0;

  setInterval(() => {
    // Write the moon phase to the console. Using \r to overwrite the previous output
    process.stdout.write(`${moonPhases[currentIndex]}\r`);
    // Increment the index and set back to zero when it reaches the end
    currentIndex = (currentIndex + 1) % moonPhases.length;
  }, 1000);
} catch (error) {
  console.error(error);
  //   Exit if there is an error loading
  process.exit(1);
}
