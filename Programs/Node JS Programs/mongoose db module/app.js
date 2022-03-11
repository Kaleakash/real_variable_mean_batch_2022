let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/rl_meanbatch";
mongoose.pluralize(null);       // to avoid s post fix and convert in lower case
mongoose.connect(url).then(res=>console.log("connected")).catch(err=>console.log(err));
var myDb = mongoose.connection;
myDb.once("open",()=> {
    // we have to create the Scheam it provide struture for the collection 
    console.log("Connected...")
    let productSchema = mongoose.Schema({
        _id:Number,
        pname:String,
        price:Number
    });
    // Now have to create the model : we can create the model with help of Schema 
    // 1st parameter collection name, 2nd schema defintion. 
    let productModel = mongoose.model("Product",productSchema);

    // using model we can create the reference of prouctModel and do the operation 
    // insert operation 
    let p1 = new productModel({_id:102,pname:"Mobile",price:25000,color:"Gray"});
    let p2 = new productModel({_id:104,pname:"Pen Drive",price:1000});
    productModel.insertMany([p1,p2],(err,result)=> {
        if(!err){
            console.log("Record inserted")
        }else {
            console.log(err);
        }
        mongoose.disconnect();
    })
})


