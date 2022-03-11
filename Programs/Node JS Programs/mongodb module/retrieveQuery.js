// loaded the module and got the reference of MongoClient 
let mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "rl_meanbatch";
mongoClient.connect(url,(err,result)=> {

    if(!err){
        console.log("Database server connected...");
        var myDb = result.db(dbName);           // connect to db 
        //let cursor = myDb.collection("EmployeeDetails").find();
        //let cursor = myDb.collection("EmployeeDetails").find({_id:1});
        //let cursor = myDb.collection("EmployeeDetails").find({salary:{$gt:20000}});
        let cursor = myDb.collection("EmployeeDetails").find({city:"Bangalore"})
        cursor.forEach(rec=> {
            //console.log("Name is "+rec.name+" Age is "+rec.age);
            console.log(rec);
            result.close();
        })
    }else {
        console.log("Error generate "+err);
    }

    //result.close();
})