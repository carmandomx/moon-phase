// 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 <-- Emojis are just text (Unicode). Neat, right? ;).
import * as fs from "fs";

function getEmoji(moons) {
  let moon = 1;
  setInterval(() => {
    console.log(moons[`m-${moon}`]);
    moon = moon > 7 ? 1 : moon + 1;
  }, 1000);
}

fs.readFile("assets.json", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const datos = JSON.parse(data);
  getEmoji(datos);
});
// Remember: only imports from node's core libraries. For ex. node:fs
