import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
@Injectable()
export class SearchService{
  search$: Observable<any>;
  private mySearch = new Subject();

  constructor() {
    this.search$ = this.mySearch.asObservable();
  }

  Search(data) {
    // console.log(data); // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    // console.log('ok');
    this.mySearch.next(data);
  }
}
