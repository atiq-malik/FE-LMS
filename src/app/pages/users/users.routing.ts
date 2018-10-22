import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './components/adduser/adduser.component';
import { ListUsersComponent } from './components/listusers/listusers.component';
import { EditUsersComponent } from './components/editusers/editusers.component';
import {AuthGuard} from "../auth.guard";
//import {ViewOfficeAccountComponent} from "./components/viewofficeaccounts/viewofficeaccount.component";
//import {EditOfficeAccountsComponent} from "./components/editofficeaccounts/editofficeaccounts.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: 'adduser', component: AddUserComponent, canActivate: [AuthGuard],
      data: { roles: ['_s_a'] }  },
      { path: 'allusers', component: ListUsersComponent, canActivate: [AuthGuard],
        data: { roles: ['_s_a'] } },
      { path: 'editusers/:id', component: EditUsersComponent, canActivate: [AuthGuard],
        data: { roles: ['_s_a'] } },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
