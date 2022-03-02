let fs = require("fs");
let emp = {id:101,name:"Ramesh",age:24};
//fs.writeFileSync("emp.json",emp);
fs.writeFile("emp.json",JSON.stringify(emp),(err)=> {
    if(!err){
        console.log("Data stored")
    }else {
            console.log(err);
    }
})
console.log("Stored data");