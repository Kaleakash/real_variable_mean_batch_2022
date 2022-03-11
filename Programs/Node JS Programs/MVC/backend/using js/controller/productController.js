let productRepository = require("../repository/productRepository");

let findAllProductDetails = async (req,res)=> {
    let result = await productRepository.findProductDetails();
    res.json(result);
}


module.exports={findAllProductDetails}