// loaded the module and got the reference of MongoClient 
let mongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "rl_meanbatch";

mongoClient.connect(url,(err,result)=> {

    if(!err){
        console.log("Database server connected...");
        var myDb = result.db(dbName);           // connect to db 
        let cursor = myDb.collection("EmployeeDetails").find();
        cursor.forEach(rec=> {
            console.log("Name is "+rec.name+" Age is "+rec.age);
            result.close();
        })
    }else {
        console.log("Error generate "+err);
    }

    //result.close();
})