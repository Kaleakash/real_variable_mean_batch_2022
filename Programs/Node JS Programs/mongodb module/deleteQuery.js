// loaded the module and got the reference of MongoClient 
let mongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "rl_meanbatch";

mongoClient.connect(url,(err,result)=> {

    if(!err){
        console.log("Database server connected...");
        var myDb = result.db(dbName);          
myDb.collection("EmployeeDetails").deleteOne({_id:2},(err,res)=> {
        if(!err){
           if(res.deletedCount>0){
                console.log("Record deleted")
           }else {
                console.log("Record didn't delete")
           }
        }else {
            console.log("Error "+err);
        }
        result.close();
})
    }else {
        console.log("Error generate "+err);
    }

    //result.close();
})