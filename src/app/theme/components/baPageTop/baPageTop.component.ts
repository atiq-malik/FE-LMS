import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';
import {Router} from "@angular/router";
import {SearchService} from "../../../services/search.service";
import {AuthGuard} from "../../../pages/auth.guard";

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop {
  public search: any = '';
  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;
  constructor(private _state:GlobalState,
              protected router:Router,
              public _searchService: SearchService,
              public _authGuard: AuthGuard) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }
  public startSearch(){
    this._searchService.Search(this.search);
  }
  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
  public searchFeature(){
    this.router.navigate(['/pages/searchsection/showresult', this.search]);
  }
  public logout() {
    localStorage.removeItem('user_token');
    this.router.navigate(['login']);
    // localStorage.clear();
  }
}
