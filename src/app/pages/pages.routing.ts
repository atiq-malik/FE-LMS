import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import {AuthGuard} from "./auth.guard";
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
  },

  {
    path: 'pages',
    component: Pages,
    children: [
      // { path: '', redirectTo: 'categories', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},

      { path: 'users', loadChildren: './users/users.module#UsersModule' },
      { path: 'books', loadChildren: './books/books.module#BooksModule' },
      { path: 'issue-books', loadChildren: './issue-books/issue-books.module#IssueBooksModule' },

    ],
    canActivate: [AuthGuard],
    data: { roles: ['_s_a'] }
  },
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
