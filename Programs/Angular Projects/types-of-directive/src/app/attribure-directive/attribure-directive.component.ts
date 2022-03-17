import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribure-directive',
  templateUrl: './attribure-directive.component.html',
  styleUrls: ['./attribure-directive.component.css']
})
export class AttribureDirectiveComponent implements OnInit {
  styleInfo={"color":"red"};
  f1:boolean = true;
  f2:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  change(){
    if(this.f1){
        this.f1 = false;
        this.f2 = true;
    }else {
      this.f1 = true;
      this.f2 = false;
    }
  }
}
