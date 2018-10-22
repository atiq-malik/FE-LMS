import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../../../../services/search.service";
import {AdminActionService} from "../../../../services/adminactions.services";
import {ModalIssueBooks} from "../modal/modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  templateUrl: './list-issued-books.html',
  styleUrls: ['./list-issued-books.scss'],
})
export class ListIssuedBooksComponent {
  searched: string = '';
  issuedbooks: Array<any>;
  filteredissuedbooks : Array<any>;
  constructor(private _adminActionService: AdminActionService,
              private router: Router,
              public _searchService: SearchService,
              public modalService: NgbModal) {
    _adminActionService.getAllIssuedBooks()
      .subscribe(res => {
        console.log(res);
        this.issuedbooks = res;
        this.filteredissuedbooks = this.issuedbooks;
      });

  }

  editIssuedBook(bookissue: any){
    if(bookissue != '') {

      bookissue['exact_return_date'] = new Date(Date.now()).toLocaleString();
      let exact = new Date(bookissue['exact_return_date']);
      let  exp = new Date(bookissue['expected_return_date']);
      var timeDiff = Math.abs(exact.getTime() - exp.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 *3600 * 24));
      bookissue['fine'] =  10 * diffDays;
      this._adminActionService.editissueBook(bookissue)
        .subscribe(res => {
          console.log(res);
          this.router.navigate(['pages/issue-books/allissuedbooks']);
          const activeModal = this.modalService.open(ModalIssueBooks, {size: 'sm'});
          activeModal.componentInstance.modalHeader = 'Success';
          activeModal.componentInstance.modalContent = 'Record Updated!';
        })
    }
    else {
      console.log("in inner else");
      const activeModal = this.modalService.open(ModalIssueBooks, {size: 'sm'});
      activeModal.componentInstance.modalHeader = 'Error';
      activeModal.componentInstance.modalContent = 'An Error Occured!';
    }
  }

}
