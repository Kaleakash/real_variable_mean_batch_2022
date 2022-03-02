let fs = require("fs");
let msg = "Store data using append file function";
//fs.writeFileSync("demo1.txt",msg,{flag:"a+"});
fs.appendFileSync("demo1.txt",msg);
console.log("Data stored in file");