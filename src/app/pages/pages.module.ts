import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';
import {AuthGuard} from "./auth.guard";
import {AdminService} from "../services/admin.services";
import {SearchService} from "../services/search.service";

import { ModalUsers } from "./users/components/modal/modal.component";
import { ModalIssueBooks } from "./issue-books/components/modal/modal.component";
import { ModalBooks } from "./books/components/modal/modal.component";


import {FormsModule} from "@angular/forms";



//import {MyDatePickerModule} from 'mydatepicker';


//import {ModalVender} from "./vendor/components/modalvendor/modal.component.";
//import { DatepickerComponent } from './promo/datepicker/datepicker.component';


@NgModule({
  imports: [CommonModule,FormsModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages,ModalUsers,ModalBooks,ModalIssueBooks,],
  entryComponents: [
    ModalUsers,
    ModalBooks,
    ModalIssueBooks

  ],
  providers: [AuthGuard, AdminService, SearchService]
})
export class PagesModule {
}
