import { Routes, RouterModule } from '@angular/router';
import { IssueBooksComponent } from './issue-books.component';
import { IssueNewBookComponent } from './components/issue-new-book/issue-new-book.component';
import { ListIssuedBooksComponent } from './components/list-issued-books/list-issued-books.component';
import { ManageIssuedBooksComponent } from './components/manage-issued-books/manage-issued-books.component';
import {AuthGuard} from "../auth.guard";
//import {ViewOfficeAccountComponent} from "./components/viewofficeaccounts/viewofficeaccount.component";
//import {EditOfficeAccountsComponent} from "./components/editofficeaccounts/editofficeaccounts.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: IssueBooksComponent,
    children: [
      { path: 'issue-new-book', component: IssueNewBookComponent, canActivate: [AuthGuard],
      data: { roles: ['_s_a'] }  },
      { path: 'allissuedbooks', component: ListIssuedBooksComponent, canActivate: [AuthGuard],
        data: { roles: ['_s_a'] } },
      { path: 'manage-issued-books/:id', component: ManageIssuedBooksComponent, canActivate: [AuthGuard],
        data: { roles: ['_s_a'] } },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
