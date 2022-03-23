import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:string=""
  constructor(public router:Router) { }

  ngOnInit(): void {
    let userInfo = sessionStorage.getItem("user");
    if(userInfo!=null){
      this.user=userInfo;
    }
  }


  logout(){
    sessionStorage.removeItem("user");
    this.router.navigate(["login"]);
  }
}
