let productModel = require("../model/productModel");    // user-defined module 

let findProductDetails = async ()=> {
        let result = await productModel.find();
        return result; 
    
    // productModel.find({},async (err,doc)=> {
    //     if(!err){
    //         console.log(doc)
    //         return JSON.stringify(doc);
    //     }else {
    //         console.log(err);
    //         return err;
    //     }
    // })

}


module.exports={findProductDetails}