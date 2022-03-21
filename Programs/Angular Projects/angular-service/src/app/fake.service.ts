import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Fake } from "./fake";

@Injectable()                       // angular service class. 
export class FakeService {

    constructor(public http:HttpClient){}       // DI for HttpClient API 

    displayInfo() :string {
        return "Welcome to Angular Service with DI concept";
    }


    // loadFakeData() {
    //  this.http.get("https://fakestoreapi.com/products").
    //  subscribe(result=>console.log(result),error=>console.log(error),()=>console.log("completed"))   
    // }

    loadFakeData():Observable<Fake[]> {
        return this.http.get<Fake[]>("https://fakestoreapi.com/products");
    }
}