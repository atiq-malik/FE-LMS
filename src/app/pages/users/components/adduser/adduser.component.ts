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
import {ModalUsers} from "../modal/modal.component";
import {isDefined} from "@ngx-translate/core/src/util";

@Component({
  selector: 'nga-add-user',
  templateUrl: './adduser.html',
  styleUrls: ['./adduser.scss'],
})

export class AddUserComponent {
  sendingRequest : boolean = false;
  submitted: boolean = false;
  data: {} = {};
  constructor(private _cfr: ComponentFactoryResolver,
              public modalService: NgbModal,
              private router: Router,
              public _authService: AuthGuard,
              public _vendorService: AdminService,
              public _adminActionService: AdminActionService) {
  }


  add(){
    this.submitted = true;
    if(this.data['name'] != '' && this.data['email'] != '' && this.data['rollno'] != ''  && this.data['address'] != '') {
      this._adminActionService.addStudent(this.data)
        .subscribe(res => {
          console.log(res);
          this.sendingRequest = false;
          this.router.navigate(['pages/users/allusers']);
          const activeModal = this.modalService.open(ModalUsers, {size: 'sm'});
          activeModal.componentInstance.modalHeader = 'Success';
          activeModal.componentInstance.modalContent = 'Student has been added!';
        })
    }
    else {
      console.log("in inner else");
      const activeModal = this.modalService.open(ModalUsers, {size: 'sm'});
      activeModal.componentInstance.modalHeader = 'Error';
      activeModal.componentInstance.modalContent = 'Please fill all the fields!!';
    }
  }
}
