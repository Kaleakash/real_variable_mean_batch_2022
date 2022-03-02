let fs = require("fs");

fs.readFile("demo.txt",(err,data)=> {
    if(err){
        console.log("Error generated");    
    }else {
        //console.log(data)
        console.log(data.toString()) // convert buffer to string 
    }
})
console.log("Normal Stament")