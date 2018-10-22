import { Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {AuthGuard} from "../../../auth.guard";
import {AdminService} from "../../../../services/admin.services";
import {AdminActionService} from "../../../../services/adminactions.services";
import {ModalIssueBooks} from "../modal/modal.component";
import {isDefined} from "@ngx-translate/core/src/util";

@Component({
  selector: 'nga-issue-new-book',
  templateUrl: './issue-new-book.html',
  styleUrls: ['./issue-new-book.scss'],
})

export class IssueNewBookComponent {
  sendingRequest : boolean = false;
  submitted: boolean = false;
  data: {} = {};
  books: any;
  filteredbooks: any;
  students: any;
  constructor(private _cfr: ComponentFactoryResolver,
              public modalService: NgbModal,
              private router: Router,
              public _authService: AuthGuard,
              public _adminService: AdminService,
              public _adminActionService: AdminActionService) {
    _adminActionService.getAllBooks()
      .subscribe(res => {
        console.log(res);
        this.books = res;
        this.filteredbooks = this.books;
      });
    _adminActionService.getAllStudents()
      .subscribe(res => {
        console.log(res);
        this.students = res;
      });
  }

  add(){
    this.submitted = true;
    if(this.data['student_id'] != '' && this.data['book_id'] != '' && this.data['expected_return_date'] != '') {
      this.data['issue_date'] = new Date(Date.now()).toLocaleString();
      this._adminActionService.issueBook(this.data)
        .subscribe(res => {
          console.log(res);
          this.sendingRequest = false;
          this.router.navigate(['pages/issue-books/allissuedbooks']);
          const activeModal = this.modalService.open(ModalIssueBooks, {size: 'sm'});
          activeModal.componentInstance.modalHeader = 'Success';
          activeModal.componentInstance.modalContent = 'Book has been issued!';
        })
    }
    else {
      console.log("in inner else");
      const activeModal = this.modalService.open(ModalIssueBooks, {size: 'sm'});
      activeModal.componentInstance.modalHeader = 'Error';
      activeModal.componentInstance.modalContent = 'Please fill all the fields!!';
    }
  }
}
