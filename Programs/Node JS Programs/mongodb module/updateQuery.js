// loaded the module and got the reference of MongoClient 
let mongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "rl_meanbatch";

mongoClient.connect(url,(err,result)=> {

    if(!err){
        console.log("Database server connected...");
        var myDb = result.db(dbName);          
myDb.collection("EmployeeDetails").updateOne({_id:1},{$set:{salary:25000}},(err,res)=> {
        if(!err){
                //console.log(res);
                if(res.modifiedCount>0 || res.matchedCount>0){
                    console.log("Record updated")
                }else {
                    console.log("Record didn't update")
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