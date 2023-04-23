// 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 <-- Emojis are just text (Unicode). Neat, right? ;).

// Remember: only imports from node's core libraries. For ex. node:fs

const fs = require('fs');

fs.readFile('assets.json','utf8', (err, data) => { //Importing the file using FS module
    if (err) {
      console.error(err); //Returning the error if the file cannot be loaded
      return;
    }
    const moonObject = JSON.parse(data);  //Transforming the data into an object and save the values in an array
    const moonArray = Object.values(moonObject);
    //console.log(Object.values(moonObject))

    const showElement = (arr, index) => { //Function to print the emojis in the console
        console.log(arr[index]);
      }
      
    let index = 0;
      
    const moonInterval = setInterval(() => { //Defining the interval that will iterate every second
        showElement(moonArray, index); //Calling function showElement to print emojis in console, the function recieves the array and the index that will be increased every second
        index++;
      
        if (index >= moonArray.length) {
            clearInterval(moonInterval); //When the index exceeds the array length the interval stops, we can delete this line and write index=0; to make and infinite cycle
        }
      }, 1000);
   
  });

