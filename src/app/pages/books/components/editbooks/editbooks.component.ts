import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {isDefined} from "@ngx-translate/core/src/util";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalBooks} from "../modal/modal.component";
import {AdminActionService} from "../../../../services/adminactions.services";

@Component({
  selector: 'nga-edit-books',
  templateUrl: './editbooks.html',
  styleUrls: ['./editbooks.scss'],
})
export class EditBooksComponent {
  sendingRequest : boolean = false;
  submitted: boolean = false;
  file: File;
  data: {} = {};
  id: any;
  loading: boolean = true;
  constructor(private route: ActivatedRoute,
              public modalService: NgbModal,
              public router: Router,
              public _adminActionService: AdminActionService) {
    console.log("in Edit");
    let sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      this._adminActionService.getBook(this.id)
        .subscribe(res=> {
            console.log(res);
            this.data = res;
            this.loading = false;
            console.log(this.data);
          }
        );
      // In a real app: dispatch action to load the details here.
    })}

  save(){
    this.submitted = true;
    // console.log(this.data);
    if(this.data['name'] != '' && this.data['author'] != '' && this.data['isbn'] != '' && this.data['price'] != '') {
      this.data['id'] = this.id;
      this._adminActionService.editBook(this.data)
        .subscribe(res => {
          console.log(res);
          if(res) {
            this.sendingRequest = false;
            this.router.navigate(['/pages/books/allbooks']);
            const activeModal = this.modalService.open(ModalBooks, {size: 'sm'});
            activeModal.componentInstance.modalHeader = 'Success';
            activeModal.componentInstance.modalContent = 'Book has been updated!';
          }
          else {
            const activeModal = this.modalService.open(ModalBooks, {size: 'sm'});
            activeModal.componentInstance.modalHeader = 'Error';
            activeModal.componentInstance.modalContent = 'Something went wrong, Unable to update!';
          }
        });
    }
    else {
      console.log("in else");
      const activeModal = this.modalService.open(ModalBooks, {size: 'sm'});
      activeModal.componentInstance.modalHeader = 'Error';
      activeModal.componentInstance.modalContent = 'Please fill all the fields!!';
    }
  }
}
