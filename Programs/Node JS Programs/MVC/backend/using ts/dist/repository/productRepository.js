"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.storeProduct = exports.findAllProduct = void 0;
const productModel_1 = require("../model/productModel");
let findAllProduct = () => {
    return productModel_1.productModel.find({});
};
exports.findAllProduct = findAllProduct;
let storeProduct = (product) => {
    return productModel_1.productModel.insertMany(product);
};
exports.storeProduct = storeProduct;
let updateProduct = (product) => {
    return productModel_1.productModel.updateOne({ _id: product._id }, { $set: { price: product.price } });
};
exports.updateProduct = updateProduct;
let deleteProduct = (pid) => {
    return productModel_1.productModel.deleteOne({ _id: pid });
};
exports.deleteProduct = deleteProduct;
