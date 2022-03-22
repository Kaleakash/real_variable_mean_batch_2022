import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';
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
  deleteMsg:string="";
  updateMsg:string="";

  flag:boolean = false;
  products:Array<Product>=[];
  _id:number=0;
  price:number=0.0;
  // inside constructor we have to do only DI.
  constructor(public pser:ProductService) { }   // DI for ProductService 
  // This is life cycle method of component or hook of component 
  // which will call automatically after component loaded. it will call only one again.
  ngOnInit(): void {
      this.retrieveAllProduct();
  }
  storeProduct() : void {
    let product = this.productRef.value;
   // console.log(product);
   this.pser.storeProductInfo(product).subscribe(result=>this.storeMsg=result.msg,
    error=>console.log(error),()=>this.retrieveAllProduct());
   this.productRef.reset();
  }

  retrieveAllProduct(): void {
    this.pser.retrieveProductInfo().subscribe(result=>this.products=result,error=>console.log(error));
  }

  deleteProduct(pid:number): void {
   // console.log(pid);
   let result = confirm("Do you want to delete the records?");
   if(result){
    this.pser.deleteProduct(pid).subscribe(result=>this.deleteMsg=result,error=>console.log(error),()=>this.retrieveAllProduct());
   }else {
     alert("Record didn't delete");
   }
   
  }
  updateProduct(product:Product){
    //console.log(product);
    this.flag=true;
    this._id=product._id;
    this.price=product.price;
  }

  updateProductFromDb(){
    let product = {_id:this._id,price:this.price};
    this.pser.updateProductInfo(product).subscribe(result=>this.updateMsg=result,error=>console.log(error),()=>this.retrieveAllProduct());
    this.flag=false;
  }

}
