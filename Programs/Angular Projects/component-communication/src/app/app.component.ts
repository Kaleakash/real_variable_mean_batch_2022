import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked{
  pname:string="Raj Deep";    // we can access this variable within this component 
                      // within this component html page
  childAge:number=0;
  @ViewChild(Child1Component)
  childRef?:Child1Component;    // creating refeference of

  ngAfterContentChecked(): void {
    if(this.childRef!=null){
    this.childAge=this.childRef?.cAge;
    
    }
  }
}
