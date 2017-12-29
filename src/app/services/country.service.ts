import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import server from '../config/server.config';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  /* Get the countries */
  getAll() {
    return this.http.get(`${server.url}/all`);
  }

}
