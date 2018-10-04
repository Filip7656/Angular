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
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    //
    this.http.post('http://localhost:8080/json',  JSON.stringify(this.model),httpOptions)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured" + err);
        }
      );

  }
  updateRecord() {
    console.log('ddddd');
    var data = {"firstName" : event.newData.firstName,
                "lastName" : event.newData.lastName,
                "email" : event.newData.email,
                "password" : event.newData.password
                };
  this.http.put('/update', data).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
  }
}
