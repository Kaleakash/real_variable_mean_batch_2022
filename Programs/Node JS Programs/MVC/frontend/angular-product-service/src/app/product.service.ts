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
}
