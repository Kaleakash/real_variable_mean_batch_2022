import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { AttribureDirectiveComponent } from './attribure-directive/attribure-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    StructureDirectiveComponent,
    AttribureDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
