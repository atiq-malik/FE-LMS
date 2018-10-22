import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../../../../services/search.service";
import {AdminActionService} from "../../../../services/adminactions.services";
import {ModalBooks} from "../modal/modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  templateUrl: './listbooks.html',
  styleUrls: ['./listbooks.scss'],
})
export class ListBooksComponent {
  searched: string = '';
  books: Array<any>;
  filteredbooks : Array<any>;
  constructor(private _adminActionService: AdminActionService,
              private router: Router,
              public _searchService: SearchService,
              public modalService: NgbModal) {
    _adminActionService.getAllBooks()
      .subscribe(res => {
        console.log(res);
        this.books = res;
        this.filteredbooks = this.books;
      });
  }

  editBook(id: any){
    this.router.navigate(['/pages/books/editbooks', id]);
  }

}
