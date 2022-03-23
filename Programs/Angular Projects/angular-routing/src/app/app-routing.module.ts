import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MyAuthGaurd } from './auth.mygaurd';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


// http://localhost:4200
// http://localhost:4200/aboutus
const abc: Routes = [
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[MyAuthGaurd]}
];

@NgModule({
  imports: [RouterModule.forRoot(abc)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
