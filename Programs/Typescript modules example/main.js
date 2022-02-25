"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
Object.defineProperty(exports, "__esModule", { value: true });
const abc_1 = require("./abc");
const xyz_1 = require("./xyz");
const obj1 = __importStar(require("./info"));
(0, abc_1.dis1)();
(0, abc_1.dis2)();
(0, xyz_1.dis3)();
obj1.a();
obj1.b();
obj1.c();
(0, abc_1.display)();
(0, xyz_1.display)();
console.log("Value of a value part of abc module " + abc_1.a);
console.log("Value of name variable part of xyz module " + xyz_1.name);
