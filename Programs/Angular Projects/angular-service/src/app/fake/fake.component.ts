import { Component, OnInit } from '@angular/core';
import { Fake } from '../fake';
import { FakeService } from '../fake.service';
/*
 <input type="button" value="load fake data" (click)="loadData()"/>
        <br/>
        <div *ngFor="let product of products">
            <p>{{product.title}}</p>
        </div>

*/
@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {
  products:Array<Fake>=[];
  constructor(public obj:FakeService) { }    //DI for Fake Service class 

  ngOnInit(): void {
  }

  loadData(){
      this.obj.loadFakeData().subscribe(result=>this.products=result,error=>console.log(error));
  }
}
