import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {
  loginRef = new FormGroup({
    user:new FormControl("",[Validators.required,Validators.minLength(3)]),
    pass:new FormControl("",[Validators.required,Validators.pattern("[a-z]+&[a-z]+")])
  })
  msg:string=""
  constructor() { }

  ngOnInit(): void {
  }
  checkUser() {
    let login = this.loginRef.value;
    if(login.user=="Raj" && login.pass=="123"){
      this.msg = "Successfully login"
    }else {
        this.msg = "Failure try once again";
    }
    this.loginRef.reset();
  }
}
