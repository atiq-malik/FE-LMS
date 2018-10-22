import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { AddBookComponent } from './components/addbook/addbook.component';
import { ListBooksComponent } from './components/listbooks/listbooks.component';
import { EditBooksComponent } from './components/editbooks/editbooks.component';
import {AuthGuard} from "../auth.guard";
//import {ViewOfficeAccountComponent} from "./components/viewofficeaccounts/viewofficeaccount.component";
//import {EditOfficeAccountsComponent} from "./components/editofficeaccounts/editofficeaccounts.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      { path: 'addbook', component: AddBookComponent, canActivate: [AuthGuard],
        data: { roles: ['_s_a'] }  },
      { path: 'allbooks', component: ListBooksComponent, canActivate: [AuthGuard],
        data: { roles: ['_s_a'] } },
      { path: 'editbooks/:id', component: EditBooksComponent, canActivate: [AuthGuard],
        data: { roles: ['_s_a'] } },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
