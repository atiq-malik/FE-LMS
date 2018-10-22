import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './issue-books.routing';
import { IssueBooksComponent } from './issue-books.component';
import { IssueNewBookComponent } from './components/issue-new-book/issue-new-book.component';
import { ListIssuedBooksComponent } from './components/list-issued-books/list-issued-books.component';
import { ManageIssuedBooksComponent } from './components/manage-issued-books/manage-issued-books.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';
import { BasicTablesService } from '../tables/components/basicTables/basicTables.service';
import {NgbDropdownModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
// import {MissingFieldsModal} from "./components/addproduct/missing-fields-modal/missing-fields-modal.component";
import {AdminActionService} from "../../services/adminactions.services";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    NgbDropdownModule,
    NgbModalModule,
    HttpModule
  ],
  declarations: [
    IssueBooksComponent,
    IssueNewBookComponent,
    ListIssuedBooksComponent,
    ManageIssuedBooksComponent
   ],
  providers: [
    BasicTablesService,
    AdminActionService
],
})
export class IssueBooksModule {
}
