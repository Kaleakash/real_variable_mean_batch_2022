// loaded the module and got the reference of MongoClient 
let mongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "rl_meanbatch";

mongoClient.connect(url,(err,result)=> {

    if(!err){
        console.log("Database server connected...");
        let emp = {_id:1,name:"Ramesh",age:34,salary:45000,deptId:100,city:"Bangalore"}
        var myDb = result.db(dbName);          
myDb.collection("EmployeeDetails").insertOne(emp,(err,res)=> {


        if(!err){
            console.log(res);
        }else {
            console.log(err);
        }
        result.close();
})
    }else {
        console.log("Error generate "+err);
    }

    //result.close();
})