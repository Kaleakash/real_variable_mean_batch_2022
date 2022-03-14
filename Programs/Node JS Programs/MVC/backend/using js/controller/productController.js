let productRepository = require("../repository/productRepository");

let findAllProductDetails = async (req,res)=> {
    try{
    let result = await productRepository.findProductDetails();
    res.json(result);
    }catch(e){
        res.json(e);
    }
}

let storeProductDetails =  async (req,res)=> {
    let product = req.body;
    try{
    let result = await productRepository.storeProduct(product);
    res.json(result);
    }catch(e){
        res.json(e);
    }
}
let updateProductDetails =  async (req,res)=> {
    let product = req.body;
    try{
    let result = await productRepository.updateProductPrice(product);
    //res.json(result);
    if(result.modifiedCount>0){
        res.send("Record updated successully")
    }else if(result.matchedCount>0){
        res.send("Record present but didn't update")
    }else {
        res.send("Record not present")
    }
    }catch(e){
        res.send(e);
    }
}
let deleteProductDetails =  async (req,res)=> {
    let pid = req.params._id;
    try{
    let result = await productRepository.deleteProductInfo(pid);
    //res.json(result);
            if(result.deletedCount>0){
                res.send("Record deleted successfully")
            }else {
                res.send("Record not present")
            }
    }catch(e){
        res.send(e);
    }
}
module.exports={findAllProductDetails,storeProductDetails,updateProductDetails,deleteProductDetails}