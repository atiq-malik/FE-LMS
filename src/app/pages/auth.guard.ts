import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let roles = route.data["roles"] as Array<string>;
        let t=localStorage.getItem('user_token');
        if (t) {

          return (roles.indexOf("_s_a") != -1);
        }

        this.router.navigate(['login']);
        return false;

      }
      isLogin() {
          let t=localStorage.getItem('user_token');
          if (t) {
              return true;
          }
          this.router.navigate(['login']);
          return false;
      }
      role() {
        let t=localStorage.getItem('user_token');
        return "_s_a";
      }
      id() {
        let t=localStorage.getItem('user_token');
        let obj = JSON.parse(t);
        return obj.userId;
      }

}
