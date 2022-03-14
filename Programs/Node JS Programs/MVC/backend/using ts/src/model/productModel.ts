import mongoose from 'mongoose';

mongoose.pluralize(null);

let productSchema = new mongoose.Schema({
    _id:{type:Number,required:true},
    pname:{type:String,required:true},
    price:{type:Number,required:true}
})


export let productModel = mongoose.model("Product",productSchema);


