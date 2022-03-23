import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input()
  parentName:string="";
  cAge:number =21;
  
  stdNames:Array<string>=["Ravi","Raju","Ramesh","Ajay"];
  constructor(public ss:SharedService) { }

  ngOnInit(): void {
    this.ss.setValue(this.stdNames);    //child1 set array value 
  }
  storeValue(nameRef:any): void {
    this.stdNames.push(nameRef.value);
  }

}
