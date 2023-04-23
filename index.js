// 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 <-- Emojis are just text (Unicode). Neat, right? ;).
// Remember: only imports from node's core libraries. For ex. node:fs
import fs from 'fs';

//read de content in assets.json
fs.readFile('assets.json',(error,data)=>{
    if(error){
        return error;
    }
    const moons=JSON.parse(data);
    console.log(moons)
})

//function to changes the emojis every second
function animateMoon(moons){
    let phase=1;
    setInterval(()=>{
        const key = `m-${phase}`;
        const emoji=moons[key];
        console.log(emoji);
        phase= phase % 8 + 1;
    },1000)
}

//use our animate function 
fs.readFile('assets.json',(error,data)=>{
    if(error){
        return error;
    }
    const moons=JSON.parse(data);
    animateMoon(moons);
})