import { Routes, RouterModule } from '@angular/router';
import { IssueBooksComponent } from './issue-books.component';
import { IssueNewBookComponent } from './components/issue-new-book/issue-new-book.component';
import { ListIssuedBooksComponent } from './components/list-issued-books/list-issued-books.component';
import {AuthGuard} from "../auth.guard";

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
    ],
  },
];

export const routing = RouterModule.forChild(routes);
