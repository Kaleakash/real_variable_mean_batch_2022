// pure database logic 
let productModel = require("../model/productModel");    // user-defined module 
let findProductDetails =()=> {
     return productModel.find({});
}
let storeProduct= (product)=> {
    return productModel.insertMany(product);
}
let updateProductPrice = (product)=> {
    return productModel.updateOne({_id:product._id},{$set:{price:product.price}});
}
let deleteProductInfo = (pid)=> {
    return productModel.deleteMany({_id:pid});
}
module.exports={findProductDetails,storeProduct,updateProductPrice,deleteProductInfo}