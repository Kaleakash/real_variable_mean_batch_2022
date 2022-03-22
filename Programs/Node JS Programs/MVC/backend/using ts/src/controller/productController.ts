import * as repository from '../repository/productRepository'
import { Request,Response } from "express";
import { Product } from '../model/product';
export let findAllProduct = async (req:Request,res:Response)=> {
            let result = await repository.findAllProduct();  
            try{
                res.json(result);
             }catch(ex){
                res.json(ex);
             }
}
export let storeProduct = async (req:Request,res:Response)=> {
       let product:Product = req.body;
       try{
         let result = await repository.storeProduct(product);  
           //res.json(result);
           res.json({"msg":"Record inserted successfully"});
        }catch(ex){
           //res.json(ex);
           res.json({"msg":"Record didn't inserted"});
        }
}
export let updateProduct = async (req:Request,res:Response)=> {
       let product:Product = req.body;
       let result = await repository.updateProduct(product);  
       try{
              if(result.modifiedCount>0){
              res.send("Record updated successfully")
              }else if(result.matchedCount>0){
              res.send("Record exist but didn't update")
              }else {
              res.send("Record didn't update")
              }
        }catch(ex){
           res.send(ex);
        }
}
export let deleteProduct = async (req:Request,res:Response)=> {
       let pid:Number = eval(req.params._id);
       let result = await repository.deleteProduct(pid);  
       try{
              if(result.deletedCount>0){
                     res.send("Record deleted successfully")
              }else {
                     res.send("Record not present")
              }
        }catch(ex){
           res.send(ex);
        }
}