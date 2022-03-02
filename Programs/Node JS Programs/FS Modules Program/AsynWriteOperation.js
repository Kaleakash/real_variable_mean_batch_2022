let fs = require("fs");

let msg ="Welcome to Node JS File module";

fs.writeFile("demo.zip",msg,(err)=> {
    if(err){
        console.log("Data stored in file")
    }
})
console.log("Hello")
