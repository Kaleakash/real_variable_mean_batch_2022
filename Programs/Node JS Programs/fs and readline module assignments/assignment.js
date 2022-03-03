let fs = require("fs");
let obj = require("readline-sync");
let con;
let employees=[]
let idValue,nameValue,salaryValue;
function addEmployee() {
        employees= JSON.parse(fs.readFileSync("employees.json"));
        idValue = obj.questionInt("Enter the id")
        nameValue = obj.question("Enter the name")
        salaryValue = obj.questionFloat("Enter the salary")
        let emp = {id:idValue,name:nameValue,salary:salaryValue}
        let result = employees.find(e=>e.id==emp.id);
        if(result==undefined){
                employees.push(emp);
                fs.writeFileSync("employees.json",JSON.stringify(employees))
                console.log("Record stored.");
        }else {
                console.log("Id must be unique");
        }
}
function deleteEmployee() {
    employees= JSON.parse(fs.readFileSync("employees.json"));
    idValue = obj.questionInt("Enter the id")
    let index = employees.findIndex(e=>e.id==idValue);
    if(index>=0){
            employees.splice(index,1);
            fs.writeFileSync("employees.json",JSON.stringify(employees))
            console.log("Record deleted successfully...");
    }else {
            console.log("Record not present");
    }
}
function updateEmployee() {
    employees= JSON.parse(fs.readFileSync("employees.json"));
    idValue = obj.questionInt("Enter the id")
    salaryValue = obj.questionFloat("Enter the salary")
    let index = employees.findIndex(e=>e.id==idValue);
    if(index>=0){
            employees[index].salary = salaryValue;
            fs.writeFileSync("employees.json",JSON.stringify(employees))
            console.log("Record updated successfully...");
    }else {
            console.log("Record not present");
    }
}

function findById() {
    employees= JSON.parse(fs.readFileSync("employees.json"));
    idValue = obj.questionInt("Enter the id")
    let empRecord = employees.find(e=>e.id==idValue);
    if(empRecord!=undefined){
            console.log(empRecord);
    }else {
            console.log("Record not present");
    }
}

function findAll() {
    employees= JSON.parse(fs.readFileSync("employees.json"));
    employees.forEach(emp=>console.log(emp));
}
let choice;
do {
console.log("1:Add, 2:Delete, 3:Update, 4:Retrieve by Id, 5 :Retrieve all");
choice = obj.questionInt("Enter your choice")
switch(choice){
    case 1:addEmployee();
        break;
    case 2:deleteEmployee();
            break;
    case 3:updateEmployee();
        break;
    case 4:findById();
        break;   
    case 5:findAll();
        break;
    default :console.log("Wrong choice")
        break;
}
console.log("do you want to continue(1=y/0=n)")
con = obj.question("Enter your choice")
}while(con==1);

console.log("Finish")