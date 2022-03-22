import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
productRef = new FormGroup({
  _id:new FormControl(),
  pname:new FormControl(),
  price:new FormControl()
});
  storeMsg:string="";
  constructor(public pser:ProductService) { }   // DI for ProductService 
  ngOnInit(): void {
  }
  storeProduct() : void {
    let product = this.productRef.value;
   // console.log(product);
   this.pser.storeProductInfo(product).subscribe(result=>this.storeMsg=result.msg,error=>console.log(error));
   this.productRef.reset();
  }

}
