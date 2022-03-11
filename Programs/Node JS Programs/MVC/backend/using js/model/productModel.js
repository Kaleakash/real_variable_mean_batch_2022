let mongoose = require("mongoose");
mongoose.pluralize(null);

// provide the structure for the collection 
let productSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price:Number
})

let productModel = mongoose.model("Product",productSchema);


module.exports=productModel;    // another file we can use using require


