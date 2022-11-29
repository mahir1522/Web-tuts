const fs = require('fs');
let text = fs.readFileSync("main.txt", "utf-8");
text = text.replace("I am", "Mahir is");
console.log(text);

console.log('Creating new file');
fs.writeFileSync("Mahir.txt", text)
