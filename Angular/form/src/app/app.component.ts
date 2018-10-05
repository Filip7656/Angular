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
  templateUrl: 'app.component.html'
})

export class AppComponent {
  model: any = {};


  constructor(private http:HttpClient) {
     }

  onSubmit() {
    this.http.post('http://localhost:8080/user',  JSON.stringify(this.model),httpOptions)
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
