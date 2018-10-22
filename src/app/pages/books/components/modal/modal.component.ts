import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-service-modal-books',
  styleUrls: [('./modal.component.scss')],
  templateUrl: './modal.component.html'
})

export class ModalBooks implements OnInit {

  modalHeader: string;
  modalContent: string = `Please fill all the fields.`;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }
}
