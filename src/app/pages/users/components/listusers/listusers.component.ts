import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../../../../services/search.service";
import {AdminActionService} from "../../../../services/adminactions.services";
import {ModalUsers} from "../modal/modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  templateUrl: './listusers.html',
  styleUrls: ['./listusers.scss'],
})
export class ListUsersComponent {
  searched: string = '';
  students: Array<any>;
  filteredstudents : Array<any>;
  constructor(private _adminActionService: AdminActionService,
              private router: Router,
              public _searchService: SearchService,
              public modalService: NgbModal) {
    _adminActionService.getAllStudents()
      .subscribe(res => {
        console.log(res);
        this.students = res;
        this.filteredstudents = this.students;
      });
  }

  deleteStudent(st: any){
    st['active'] = false;
    this._adminActionService.deleteStudent(st)
      .subscribe(res => {
        if(res) {
          const activeModal = this.modalService.open(ModalUsers, {size: 'sm'});
          activeModal.componentInstance.modalHeader = 'Success';
          activeModal.componentInstance.modalContent = 'Deleted Successfully!!';
          let index = this.students.indexOf(st);
          this.students.splice(index, 1);
          this.filteredstudents = this.students;
        }
        else {
          const activeModal = this.modalService.open(ModalUsers, {size: 'sm'});
          activeModal.componentInstance.modalHeader = 'Error';
          activeModal.componentInstance.modalContent = 'Something went wrong, Unable to delete!!';
        }
      });
  }


  editStudent(id: any){
    this.router.navigate(['/pages/users/editusers', id]);
  }

}
