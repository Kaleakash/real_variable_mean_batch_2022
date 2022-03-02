let fs = require("fs");
let obj = require("readline-sync");
idValue = obj.questionInt("Enter the id");
nameValue = obj.question("Enter the name");
ageValue = obj.questionInt("Enter the age");

let employees = JSON.parse(fs.readFileSync("employee.json"));
let emp1 = {id:idValue,name:nameValue,age:ageValue};
let res = employees.find(e=>e.id==emp1.id);
if(res==undefined){
    employees.push(emp1);
    fs.writeFileSync("employee.json",JSON.stringify(employees));
    console.log("Record stored successfully")
}else {
    console.log("Id must be unqique")
}
