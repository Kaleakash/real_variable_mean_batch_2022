import mongoose from 'mongoose';

mongoose.pluralize(null);   // don't create lower case and don't add post fix s 

let productSchema = new mongoose.Schema({
    _id:{type:Number,required:true},
    pname:{type:String,required:true},
    price:{type:Number,required:true}
})


export let productModel = mongoose.model("Product",productSchema);


