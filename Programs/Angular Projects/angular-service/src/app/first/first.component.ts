import { Component, OnInit } from '@angular/core';
import { MyService } from '../custom.service';
import { FakeService } from '../fake.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  msg1:string=""
  msg2:string="";
  constructor(public fser:FakeService) { }    // pull the object from container 

  ngOnInit(): void {
  }

  fun1() :void {
    let ser = new MyService();      // we create this object explicitly 
    this.msg1=ser.info();
  }

  fun2() : void {
                // pull the resource or object from container 
                this.msg2=this.fser.displayInfo();
  }
}
