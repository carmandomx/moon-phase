// 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 <-- Emojis are just text (Unicode). Neat, right? ;).

// Remember: only imports from node's core libraries. For ex. node:fs
import fs from 'node:fs'

let assets = {}; // Initializing variable to contain assets

// Checking availability of assets and loading them into the previously defined variable
try {
  assets = JSON.parse(fs.readFileSync('assets.json'));
} catch (err) {
  console.error('Failed to load assets:', err);
  process.exit(1);
}

const moonPhases = Object.values(assets); //Get the moon phases emojis from the assets

let currentPhase = 0; // Initialize the current moon phase index

// Define a function to update the moon phase every second
const updateMoonPhase = () => {
  // Outputting to console the needed emoji. \r to overwrite previous emoji
  process.stdout.write(`\r${moonPhases[currentPhase]} `);

  // updating current phase to show the next emoji in order
  currentPhase = (currentPhase + 1) % moonPhases.length;
};

// Update the moon phase every second
setInterval(updateMoonPhase, 1000);
