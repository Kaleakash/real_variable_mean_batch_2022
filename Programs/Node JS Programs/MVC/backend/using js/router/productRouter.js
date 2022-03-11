let express = require("express");
let productController = require("../controller/productController");
let router  = express.Router();     // we will get router reference. 

router.get("/findAllProduct",productController.findAllProductDetails);
//router.get("/findAllProduct",productController.findAllProductDetails);


module.exports=router;