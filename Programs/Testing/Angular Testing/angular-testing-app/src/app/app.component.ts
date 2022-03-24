import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing-app';
  id:number=100;
  name:string ="Raj Deep";
  age:number =21;
  names:Array<string>=["Ravi","Ajay","Vijay","Mahesh"];

  disInfo() {
    return "Welcome to Angular Testing";
  }
}
