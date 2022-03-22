import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // equal to register in provided attribute in app.module.ts
})
export class ProductService {

  constructor(public http:HttpClient) { }   // DI for HttpClient
  storeProductInfo(product:Product):Observable<any>{
    return this.http.post("http://localhost:9090/api/product/storeProductDetails",product);
  }
  retrieveProductInfo():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/api/product/findAllProducts");
  }
  deleteProduct(pid:number):Observable<string>{
    return this.http.delete("http://localhost:9090/api/product/deleteProductInfo/"+pid,{responseType:'text'});
  }

  updateProductInfo(product:any):Observable<string> {
    return this.http.put("http://localhost:9090/api/product/updateProductDetails",product,{responseType:'text'});
  }
}
