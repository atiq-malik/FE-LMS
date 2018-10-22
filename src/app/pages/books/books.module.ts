import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './books.routing';
import { BooksComponent } from './books.component';
import { AddBookComponent } from './components/addbook/addbook.component';
import { ListBooksComponent } from './components/listbooks/listbooks.component';
import { EditBooksComponent } from './components/editbooks/editbooks.component';
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
    BooksComponent,
    AddBookComponent,
    ListBooksComponent,
    EditBooksComponent
   ],
  providers: [
    BasicTablesService,
    AdminActionService
],
})
export class BooksModule {
}
