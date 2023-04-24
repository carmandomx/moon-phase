//Import of the required modules.
import fs from "fs/promises";
import process from "process";

async function animateMoonPhases() {
  //Definition of the async function, this because of the use of Promises
  try {
    //Try block so we can use the catch error if needed
    // Read and parse the contents of assets.json
    const data = await fs.readFile("assets.json", "utf-8"); //This line reads the contents of the assets.json file using the fs.readFile method and the content is stored in the data variable as a string.
    const assets = JSON.parse(data); //This line parses the JSON string from the data variable and stores the resulting object in the assets variable.

    // Get the moon phases emojis array
    const moonPhases = Object.values(assets); //This line extracts the values from the assets object (the moon phase emojis) and stores them in an array called moonPhases.

    let counter = 0; //I initialize a variable called counter with a value of 0. This variable will be used to keep track of the current moon phase index in the moonPhases array.

    // Set an interval to change the moon phase every second
    setInterval(() => {
      console.clear(); //Clear the console output, making it easier to see the current moon phase emoji animation.
      console.log(moonPhases[counter]); //This line logs the current moon phase emoji to the console, using the counter variable as the index for the moonPhases array.

      // Increment the counter or reset it if it reaches the end of the array
      counter = (counter + 1) % moonPhases.length; // This line increments the counter variable and uses the operator % to ensure that the counter wraps around to 0 when it reaches the end of the moonPhases array. This way, the moon phase animation loops continuously.
    }, 1000); //The interval will be 1000 milliseconds (1 second).
  } catch (error) {
    //If an error occurs in the try block, the code inside the catch block will be executed
    console.error("Error loading assets:", error); //Logs the error message to the console, including the text "Error loading assets:" and the error.
    process.exit(1); // Exit the program with a non-zero status code (1) to indicate an error occurred
  }
}

// Call the animateMoonPhases function
animateMoonPhases();
