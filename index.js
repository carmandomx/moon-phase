// 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 <-- Emojis are just text (Unicode). Neat, right? ;).

// Remember: only imports from node's core libraries. For ex. node:fs

import { readFile } from "fs";

readFile("assets.json", (err, data) => {
  //this will read the assets file
  if (err) {
    console.error(err);
    process.exit(1); //1 - Uncaught Fatal Exception: There was an uncaught exception, and it was not handled by a domain or an uncaughtException event handler.
  }

  const assets = JSON.parse(data); //parses a JSON string

  let idx = 0;

  setInterval(() => {
    const moonPhases = Object.values(assets); //get the values of assets.json
    console.log(moonPhases[idx]); //logs the phases
    idx++; //increase the counter

    if (idx >= moonPhases.length) {
      //restart the counter
      idx = 0;
    }
  }, 1000); //every second increase
});
