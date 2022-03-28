import * as controller from '../controller/productController';
import express from 'express';
let productrouter = express.Router();

productrouter.get("/findAllProducts",controller.findAllProduct);
productrouter.post("/storeProductDetails",controller.storeProduct);
productrouter.delete("/deleteProductInfo/:_id",controller.deleteProduct);
productrouter.put("/updateProductDetails",controller.updateProduct);

export=productrouter;

