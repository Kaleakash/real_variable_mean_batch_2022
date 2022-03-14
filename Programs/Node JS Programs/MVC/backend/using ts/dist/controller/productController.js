"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.storeProduct = exports.findAllProduct = void 0;
const repository = __importStar(require("../repository/productRepository"));
let findAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield repository.findAllProduct();
    try {
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.findAllProduct = findAllProduct;
let storeProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let product = req.body;
    let result = yield repository.storeProduct(product);
    try {
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.storeProduct = storeProduct;
let updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let product = req.body;
    let result = yield repository.updateProduct(product);
    try {
        if (result.modifiedCount > 0) {
            res.send("Record updated successfully");
        }
        else if (result.matchedCount > 0) {
            res.send("Record exist but didn't update");
        }
        else {
            res.send("Record didn't update");
        }
    }
    catch (ex) {
        res.send(ex);
    }
});
exports.updateProduct = updateProduct;
let deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let pid = eval(req.params._id);
    let result = yield repository.deleteProduct(pid);
    try {
        if (result.deletedCount > 0) {
            res.send("Record deleted successfully");
        }
        else {
            res.send("Record not present");
        }
    }
    catch (ex) {
        res.send(ex);
    }
});
exports.deleteProduct = deleteProduct;
