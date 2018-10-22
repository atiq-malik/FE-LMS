
import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'ngbd-datepicker-basic',
  templateUrl: './datepicker.component.html'
})
export class NgbdDatepickerBasic {
  showingcalendar: boolean = false;
  model: NgbDateStruct;
  date: {year: number, month: number};
  showcalendar(){
    this.showingcalendar = true;
  }
  selected(){
    this.showingcalendar = false;
  }
  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}
