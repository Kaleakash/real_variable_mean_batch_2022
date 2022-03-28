let express = require("express");

let app = express();
let employee=[
    {id:100,name:"Ravi",age:21},
    {id:101,name:"Ramesh",age:22},
    {id:1002,name:"Raju",age:23},
]
app.get("/",(req,res)=> {
    res.send("Welcome to Express with Docker")
})

app.get("/user/:name",(req,res)=> {
    let name = req.params.name;
    res.send("Welcome user "+name+" with docker concept");
})

app.get("/employee",(req,res)=> {
    res.json(employee);
})

app.listen(3000,()=>console.log(`Server running on port number 3000`))
