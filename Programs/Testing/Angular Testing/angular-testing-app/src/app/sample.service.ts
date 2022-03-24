import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class SampleService {
  constructor(public http:HttpClient) { }
  getInfo(): string {
    return "Welcome to Simple angular service testing";
  }
  getFakeAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>("https://fakestoreapi.com/products");
  }

  geProduct(pid:number):Observable<Product>{
    return this.http.get<Product>("https://fakestoreapi.com/products/"+pid);
  }
}
