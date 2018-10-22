import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

// const httpOptions = {
//   headers: new Headers({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class AdminService {

  private baseUrl = 'http://localhost:3000/api/';  // URL to web api

  constructor(
    private http: Http) { }

  login (json): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.baseUrl + 'users/login/', JSON.stringify(json),{ headers: headers })
      .map(res => res.json());
  }
}
