let mongoose = require("mongoose");
mongoose.pluralize(null);   // to avoid plular 

// provide the structure for the collection 
let productSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price:Number
})
// we are creating model 
//1st parameter is collection name
// 2nd parameter is collection details. 
let productModel = mongoose.model("Product",productSchema);


module.exports=productModel;    // another file we can use using require


