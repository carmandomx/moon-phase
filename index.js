// 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 <-- Emojis are just text (Unicode). Neat, right? ;).
import * as fs from "fs";

// function who receive moons from fs.readFile
function getEmoji(moons) {
  let moon = 1;
  setInterval(() => {
    // print emoji and count moon from 1 to 8
    console.log(moons[`m-${moon}`]);
    moon = moon > 7 ? 1 : moon + 1;
  }, 1000);
}

// this scope read assets.json file and convert the content to an object
fs.readFile("assets.json", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const datos = JSON.parse(data);

  // calls the getEmojo function to print the emojis
  getEmoji(datos);
});
// Remember: only imports from node's core libraries. For ex. node:fs
