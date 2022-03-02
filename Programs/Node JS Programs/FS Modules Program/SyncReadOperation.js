let fs = require("fs");
let data = fs.readFileSync("demo.txt");
console.log(data.toString());