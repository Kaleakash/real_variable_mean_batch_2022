import { Product } from '../model/product';
import {productModel} from '../model/productModel';


export let findAllProduct = ()=> {
    return productModel.find({});
}

export let storeProduct  = (product:Product)=> {
    return productModel.insertMany(product)
}

export let updateProduct = (product:Product)=> {
    return productModel.updateOne({_id:product._id},{$set:{price:product.price}});
}

export let deleteProduct = (pid:Number)=> {
    return productModel.deleteOne({_id:pid});
}

