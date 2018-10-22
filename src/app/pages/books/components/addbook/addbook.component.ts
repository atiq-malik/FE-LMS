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
import {ModalBooks} from "../modal/modal.component";
import {isDefined} from "@ngx-translate/core/src/util";

@Component({
  selector: 'nga-add-book',
  templateUrl: './addbook.html',
  styleUrls: ['./addbook.scss'],
})

export class AddBookComponent {
  sendingRequest : boolean = false;
  submitted: boolean = false;
  data: {} = {};
  constructor(private _cfr: ComponentFactoryResolver,
              public modalService: NgbModal,
              private router: Router,
              public _authService: AuthGuard,
              public _adminService: AdminService,
              public _adminActionService: AdminActionService) {
  }

  add(){
    this.submitted = true;
    if(this.data['name'] != '' && this.data['author'] != '' && this.data['isbn'] != '' && this.data['price'] != '') {
      this._adminActionService.addBook(this.data)
        .subscribe(res => {
          console.log(res);
          this.sendingRequest = false;
          this.router.navigate(['pages/books/allbooks']);
          const activeModal = this.modalService.open(ModalBooks, {size: 'sm'});
          activeModal.componentInstance.modalHeader = 'Success';
          activeModal.componentInstance.modalContent = 'Book has been added!';
        })
    }
    else {
      console.log("in inner else");
      const activeModal = this.modalService.open(ModalBooks, {size: 'sm'});
      activeModal.componentInstance.modalHeader = 'Error';
      activeModal.componentInstance.modalContent = 'Please fill all the fields!!';
    }
  }
}
