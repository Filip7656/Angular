import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Component({
  selector: 'app',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  model: any = {};


  constructor(private http:HttpClient) {
     }

  onSubmit() {
    this.http.post('http://localhost:8080/user/login',  JSON.stringify(this.model),httpOptions)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured" + err);
        }
      );
    }

}
