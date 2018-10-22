import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './users.routing';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './components/adduser/adduser.component';
import { ListUsersComponent } from './components/listusers/listusers.component';
import { EditUsersComponent } from './components/editusers/editusers.component';
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
    UsersComponent,
    AddUserComponent,
    ListUsersComponent,
    EditUsersComponent
   ],
  providers: [
    BasicTablesService,
    AdminActionService
],
})
export class UsersModule {
}
