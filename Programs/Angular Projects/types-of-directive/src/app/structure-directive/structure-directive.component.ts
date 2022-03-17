import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  f1:boolean = true;
  f2:boolean = false;
  f3:boolean = false;
    b1:string ="show";
  f4:boolean = false;

  names:Array<string>=["Raj","Ravi","Ramesh","Lokesh","Mahesh"]
  emp:Employee={id:100,name:"Ravi",age:21};
  employees:Array<Employee>=[{id:4,name:"Balaji",age:39}];

  constructor() { 
    let emp1:Employee={id:1,name:"Ajay",age:34};
    let emp2:Employee={id:2,name:"Mahesh",age:37};
    let emp3:Employee={id:3,name:"Raju",age:38};
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
  }
  ngOnInit(): void {
  }
  fun() {
    this.f3=true;
  }
  change() {
      if(!this.f4){
          this.f4=true;
          this.b1="Hide";
      }else {
          this.b1="Show";
          this.f4=false;
      }
  }
}
