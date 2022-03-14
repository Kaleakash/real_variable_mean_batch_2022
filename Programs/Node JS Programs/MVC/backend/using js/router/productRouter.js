let express = require("express");
let productController = require("../controller/productController");
let router  = express.Router();     // we will get router reference. 

router.get("/findAllProduct",productController.findAllProductDetails);
router.post("/storeProduct",productController.storeProductDetails);
router.put("/updateProduct",productController.updateProductDetails);
router.delete("/deleteProduct/:_id",productController.deleteProductDetails);


module.exports=router;