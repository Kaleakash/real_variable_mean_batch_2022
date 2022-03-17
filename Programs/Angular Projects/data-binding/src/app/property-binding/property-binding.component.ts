import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  lastname:string="patil";
  f1:boolean = true;
  f2:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
