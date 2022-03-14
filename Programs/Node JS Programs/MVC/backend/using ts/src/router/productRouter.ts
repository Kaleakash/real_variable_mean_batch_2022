import * as controller from '../controller/productController';
import express from 'express';
let router = express.Router();

router.get("/findAllProducta",controller.findAllProduct);
router.post("/storeProductDetails",controller.storeProduct);
router.delete("/deleteProductInfo/:_id",controller.deleteProduct);
router.put("/updateProductDetails",controller.updateProduct);

export=router;

