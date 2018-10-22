import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {isDefined} from "@ngx-translate/core/src/util";

@Injectable()
export class AdminActionService {

  private baseUrl = 'http://localhost:3000/api/';  // URL to web api
  access_token = JSON.parse(localStorage.getItem('user_token')).id;
  constructor(private http: Http) { }
  // updateAdmin(body: any): any {
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('token', localStorage.getItem('user_token'));
  //   return this.http.post(this.baseUrl + 'updateadmin',JSON.stringify(body) ,{ headers: headers })
  //     .map(res => res.json());
  // }


  // validusername(username: string){
  //   let data = {
  //     user_name: username
  //   };
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('token', localStorage.getItem('user_token'));
  //   return this.http.post(this.baseUrl + 'validusername',JSON.stringify(data), { headers: headers })
  //     .map(res => res.json());
  // }

  // checkemail(email: string){
  //   let data = {
  //     email: email
  //   };
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('token', localStorage.getItem('user_token'));
  //   return this.http.post(this.baseUrl + 'checkemail',JSON.stringify(data), { headers: headers })
  //     .map(res => res.json());
  // }




  // resetPassword(aoid: string): any {
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('token', localStorage.getItem('user_token'));
  //   return this.http.get(this.baseUrl+'resetpassword?oaid='+aoid, { headers: headers })
  //     .map(res => res.json());
  // }
  addcategory(cover_files:File, data: any) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      if(isDefined(cover_files)) {
        formData.append("uploads", cover_files[0], cover_files[0].name);
      }
      for (const d in data) {
        // console.log(d);
        formData.append(d, data[d]);
      }
      // formData.append("name", data.name);
      // formData.append("type", data.type);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.open("POST", this.baseUrl+"addcategory", true);
      xhr.setRequestHeader('token', localStorage.getItem('user_token'));
      xhr.send(formData);
    });

  }
  getCategory(aoid: string): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', localStorage.getItem('user_token'));
    return this.http.get(this.baseUrl+'getcategory?cid='+aoid, { headers: headers })
      .map(res => res.json());
  }

  getAllCategories(): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', localStorage.getItem('user_token'));
    return this.http.get(this.baseUrl+'getAllCategories/', { headers: headers })
      .map(res => res.json());
  }
  // activateCategory(id: string): any {
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('token', localStorage.getItem('user_token'));
  //   return this.http.get(this.baseUrl + 'activatecategory?cid='+id, { headers: headers })
  //     .map(res => res.json());
  // }
  // deactivateCategory(id: string): any {
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('token', localStorage.getItem('user_token'));
  //   return this.http.get(this.baseUrl + 'deactivatecategory?cid='+id, { headers: headers })
  //     .map(res => res.json());
  // }
  deleteCategory(id: string): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', localStorage.getItem('user_token'));
    let data = { _id : id};
    return this.http.delete(this.baseUrl + 'deletecategory/', { headers: headers, body: data })
      .map(res => res.json());
  }
  editcategory (cover_files:File, data: any) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      if(isDefined(cover_files)) {
        formData.append("uploads", cover_files[0], cover_files[0].name);
      }
      for (const d in data) {
        // console.log(d);
        formData.append(d, data[d]);
      }
      // formData.append("name", data.name);
      // formData.append("type", data.type);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.open("POST", this.baseUrl+'editcategory', true);
      xhr.setRequestHeader('token', localStorage.getItem('user_token'));
      xhr.send(formData);})
  }



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

  // addbook(cover_files:File, data: any) {
  //   return new Promise((resolve, reject) => {
  //     var formData: any = new FormData();
  //     var xhr = new XMLHttpRequest();
  //     if(isDefined(cover_files)) {
  //       formData.append("uploads", cover_files[0], cover_files[0].name);
  //     }
  //     for (const d in data) {
  //       // console.log(d);
  //       formData.append(d, data[d]);
  //     }
  //     // formData.append("name", data.name);
  //     // formData.append("type", data.type);
  //     xhr.onreadystatechange = function () {
  //       if (xhr.readyState == 4) {
  //         if (xhr.status == 200) {
  //           resolve(JSON.parse(xhr.response));
  //         } else {
  //           reject(xhr.response);
  //         }
  //       }
  //     };
  //     xhr.open("POST", this.baseUrl+"addcategory", true);
  //     xhr.setRequestHeader('token', localStorage.getItem('user_token'));
  //     xhr.send(formData);
  //   });
  //
  // }
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

  deleteBook(id: string): any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', localStorage.getItem('user_token'));
    let data = { _id : id};
    return this.http.delete(this.baseUrl + 'books?access_token='+this.access_token, { headers: headers, body: data })
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
