import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login.component';
import { RegisterComponent } from '../register/app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,

  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [LoginComponent],
})

export class AppModule { }
