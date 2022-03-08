import express,{Request,Response} from 'express';
let app = express();

interface Employee {
    empId:number;
    empName:string;
    empAge:number;
    tech:Array<string>;
    add:Address;
    projects:Array<Project>;
}
interface Address {
    city:string;
    state:string;
}
interface Project{
    pid:number;
    ptech:String;
}
// middleware : to enable json data 
app.use(express.json());
let employees:Array<Employee>=[
    {empId:100,empName:"Ravi",empAge:21,tech:["Java"],add:{city:"Bangalore",state:"Kar"},
    projects:[{pid:111,ptech:"Java"}]},
    {empId:102,empName:"Ramesh",empAge:22,tech:["Angular","React"],add:{city:"Mumbai",state:"Mh"},
    projects:[{pid:111,ptech:"Java"},{pid:222,ptech:"Angualr"}]},
    {empId:103,empName:"Lokesh",empAge:23,tech:["HTML","CSS","JS"],add:{city:"Pune",state:"Mh"},
    projects:[{pid:333,ptech:"Python"},{pid:444,ptech:"ReactJS"}]}
]
/*
using id find the name 
using id find the city 
using id find the project details. 
pass the technname you have to find employee details. 
*/
// http://localhost:9090
app.get("/",(req:Request,res:Response)=> {
    res.send("Welcome to Express JS using Typescript");
})
// http://localhost:9090/findEmployee/100
// http://localhost:9090/findEmployee/1
app.get("/findEmployee/:empId",(req:Request,res:Response)=> {
    //let eid = req.params.empId;
    let eid:number = eval(req.params.empId);
    let employee = employees.find(e=>e.empId==eid);
    if(employee==undefined){
            //res.send("Record not present")
            res.json({"msg":"Recod didn't store"})
    }else {
            res.json(employee);         // string consider 
    }
})
// http://localhost:9090/findAllEmployees
app.get("/findAllEmployees",(req:Request,res:Response)=> {
    res.json(employees);                // res.send(employees);
})

// http://localhost:9090/storeEmployee 
app.post("/storeEmployee",(req:Request,res:Response)=> {
    let employee:Employee = req.body;
    let result = employees.find(e=>e.empId==employee.empId);
    if(result==undefined){
            employees.push(employee);
            res.send("Record stored successfully");
    }else {
            res.send("Employee id must be unique");
    }
})

// http://localhost:9090/deleteEmployee/1
app.delete("/deleteEmployee/:id",(req:Request,res:Response)=> {
    let id:number= eval(req.params.id);
    let index:number = employees.findIndex(e=>e.empId==id);
    if(index<0){
            res.send("REcord not present")
    }  else {
        employees.splice(index,1);
        res.send("Record deleted successfully")
    }
})

// http://localhost:9090/updateAge
app.put("/updateAge",(req:Request,res:Response)=> {
    let emp:Employee = req.body;
    let index:number = employees.findIndex(e=>e.empId==emp.empId);
    if(index<0){
            res.send("REcord not present")
    }  else {
            if(employees[index].empAge < emp.empAge){
                    employees[index].empAge=emp.empAge;
                    res.send("REcord updated successfully")
            }   else {
                    res.send("Age must be > current Age");
            }
    }
})


app.listen(9090,()=>console.log("Server running on port number 9090"))