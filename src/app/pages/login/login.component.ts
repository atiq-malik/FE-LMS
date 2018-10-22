import {Component, OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AdminService} from "../../services/admin.services";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthGuard} from "../auth.guard";

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login implements OnInit{

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public returnUrl: string;

  constructor(fb:FormBuilder, private _adminService: AdminService, private router: Router, private _route: ActivatedRoute, private authGuard: AuthGuard) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(2)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    if (this.authGuard.isLogin()) {
      this.router.navigate(['pages/dashboard']);
    }

  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
      let data = {
        "email": values['email'],
        "password": values['password']
      };
      this._adminService.login(data)
        .subscribe(res=>
          {
            console.log(res);

              localStorage.setItem('user_token', JSON.stringify(res));
              this.router.navigate(['pages/dashboard']);

          }
        )
    }
  }
}
