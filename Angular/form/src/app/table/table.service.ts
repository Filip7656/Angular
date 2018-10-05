import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080';
  getCharacters() {
    return this
            .http
            .get(`${this.url}/user`);
        }
}
