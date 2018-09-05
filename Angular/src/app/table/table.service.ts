import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
  constructor(private http: HttpClient) { }
  url = 'http://145.239.87.1:4000';
  getCharacters() {
    return this
            .http
            .get(`${this.url}/json_data`);
        }
}
