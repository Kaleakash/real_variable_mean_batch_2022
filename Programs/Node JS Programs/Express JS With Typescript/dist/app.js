"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let app = (0, express_1.default)();
// middleware : to enable json data 
app.use(express_1.default.json());
let employees = [
    { empId: 100, empName: "Ravi", empAge: 21, tech: ["Java"], add: { city: "Bangalore", state: "Kar" },
        projects: [{ pid: 111, ptech: "Java" }] },
    { empId: 102, empName: "Ramesh", empAge: 22, tech: ["Angular", "React"], add: { city: "Mumbai", state: "Mh" },
        projects: [{ pid: 111, ptech: "Java" }, { pid: 222, ptech: "Angualr" }] },
    { empId: 103, empName: "Lokesh", empAge: 23, tech: ["HTML", "CSS", "JS"], add: { city: "Pune", state: "Mh" },
        projects: [{ pid: 333, ptech: "Python" }, { pid: 444, ptech: "ReactJS" }] }
];
// http://localhost:9090
app.get("/", (req, res) => {
    res.send("Welcome to Express JS using Typescript");
});
// http://localhost:9090/findEmployee/100
// http://localhost:9090/findEmployee/1
app.get("/findEmployee/:empId", (req, res) => {
    //let eid = req.params.empId;
    let eid = eval(req.params.empId);
    let employee = employees.find(e => e.empId == eid);
    if (employee == undefined) {
        //res.send("Record not present")
        res.json({ "msg": "Recod didn't store" });
    }
    else {
        res.json(employee); // string consider 
    }
});
// http://localhost:9090/findAllEmployees
app.get("/findAllEmployees", (req, res) => {
    res.json(employees); // res.send(employees);
});
// http://localhost:9090/storeEmployee 
app.post("/storeEmployee", (req, res) => {
    let employee = req.body;
    let result = employees.find(e => e.empId == employee.empId);
    if (result == undefined) {
        employees.push(employee);
        res.send("Record stored successfully");
    }
    else {
        res.send("Employee id must be unique");
    }
});
// http://localhost:9090/deleteEmployee/1
app.delete("/deleteEmployee/:id", (req, res) => {
    let id = eval(req.params.id);
    let index = employees.findIndex(e => e.empId == id);
    if (index < 0) {
        res.send("REcord not present");
    }
    else {
        employees.splice(index, 1);
        res.send("Record deleted successfully");
    }
});
// http://localhost:9090/updateAge
app.put("/updateAge", (req, res) => {
    let emp = req.body;
    let index = employees.findIndex(e => e.empId == emp.empId);
    if (index < 0) {
        res.send("REcord not present");
    }
    else {
        if (employees[index].empAge < emp.empAge) {
            employees[index].empAge = emp.empAge;
            res.send("REcord updated successfully");
        }
        else {
            res.send("Age must be > current Age");
        }
    }
});
app.listen(9090, () => console.log("Server running on port number 9090"));
