"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.pluralize(null); // don't create lower case and don't add post fix s 
let productSchema = new mongoose_1.default.Schema({
    _id: { type: Number, required: true },
    pname: { type: String, required: true },
    price: { type: Number, required: true }
});
exports.productModel = mongoose_1.default.model("Product", productSchema);
