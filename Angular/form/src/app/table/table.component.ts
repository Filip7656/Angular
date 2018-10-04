import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Table } from './Table';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: ['./table.component.css']
})
export class TableComponent implements OnInit {

  json_data: Table[];
  settings = {
    columns: {
      firstName: {
        title: 'First Name'
      },
      lastName: {
        title: 'Last Name'
      },
      email: {
        title: 'Email'
      },
      password: {
        title: 'Password'
      },
    }
  };

  constructor(private tservice: TableService, private http: HttpClient) { }

  ngOnInit() {
    this
      .tservice
      .getCharacters()
      .subscribe((data: Table[]) => {
        this.json_data = data;
    });
  }
  updateRecord(event) {
    console.log('ddddd');
    var data = {"firstName" : event.newData.firstName,
                "lastName" : event.newData.lastName,
                "email" : event.newData.email,
                "password" : event.newData.password,
                "uid" : event.newData.uid
                };
  this.http.put('http://localhost:8080/json/update', data).subscribe(
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
