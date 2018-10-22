import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {isDefined} from "@ngx-translate/core/src/util";

@Injectable()
export class AdminActionService {

  private baseUrl = 'http://localhost:3000/api/';  // URL to web api
  access_token = JSON.parse(localStorage.getItem('user_token')).id;
  constructor(private http: Http) { }


  addStudent (body): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('access_token', localStorage.getItem('user_'));
    return this.http.post(this.baseUrl + 'students?access_token='+this.access_token,body)
      .map(res => res.json());
  }
  getStudent(id: string): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseUrl+'students/'+id+'?access_token='+this.access_token, { headers: headers })
      .map(res => res.json());
  }
  getAllStudents(): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseUrl+'students?access_token='+this.access_token+'&filter[where][active]=true', { headers: headers })
      .map(res => res.json());
  }
  editStudent (body) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.baseUrl+'students?access_token='+this.access_token,body, { headers: headers })
      .map(res => res.json());
  }
  deleteStudent(body): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.baseUrl+'students?access_token='+this.access_token,body, { headers: headers })
      .map(res => res.json());
  }


  addBook (body): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + 'books?access_token='+this.access_token,body, { headers: headers })
      .map(res => res.json());
  }


  getBook(id: string): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', localStorage.getItem('user_token'));
    return this.http.get(this.baseUrl+'books/'+id+'?&access_token='+this.access_token, { headers: headers })
      .map(res => res.json());
  }

  getAllBooks(): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', localStorage.getItem('user_token'));
    return this.http.get(this.baseUrl+'books?access_token='+this.access_token, { headers: headers })
      .map(res => res.json());
  }


  editBook ( body: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.baseUrl+'books?access_token='+this.access_token,body, { headers: headers })
      .map(res => res.json());
  }

  issueBook(body): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + 'bookissues?access_token='+this.access_token,body, { headers: headers })
      .map(res => res.json());
  }
  getAllIssuedBooks(): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseUrl+'bookissues?access_token='+this.access_token+'&filter={"include":["student","book"]}', { headers: headers })
      .map(res => res.json());
  }
  editissueBook(body: any):any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.baseUrl+'bookissues?access_token='+this.access_token,body, { headers: headers })
      .map(res => res.json());
  }

}
