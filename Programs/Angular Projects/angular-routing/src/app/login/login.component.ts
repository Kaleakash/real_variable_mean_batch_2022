import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRef=new FormGroup({
    email:new FormControl(),
    pass:new FormControl()
  })
  msg:string=""
  constructor(public router:Router) { }   //DI for router 

  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value;
    console.log(login)
    if(login.email == "raj@gmail.com" && login.pass=="123"){
          sessionStorage.setItem("user",login.email);
          this.router.navigate(["home"]);
    }else {
        this.msg ="Failure try once again";
    }
  }

}
