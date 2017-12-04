import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  usernameOrPasswordWrong: boolean;
  returnUrl: string;
  user = new FormControl('', Validators.required);
  pass = new FormControl('', Validators.required);
  checkingCredentials: boolean;

  constructor(private _authService: AuthService,
    private _jwtHelperService: JwtHelperService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/home';
    this.usernameOrPasswordWrong = false;
    this.checkingCredentials = false;
  }

  getErrorMessage(field) {
    return field.hasError('required') ? 'Trebuie sa introduci o valoare' : '';
  }

  login() {

    this.checkingCredentials = true;
    this._authService.login(this.username, this.password).subscribe(
      (loggedIn: any) => {
        console.log(loggedIn);
        this.checkingCredentials = false;
        this._router.navigateByUrl(this.returnUrl);
      },
      (error) => {
        this.usernameOrPasswordWrong = true;
        this.checkingCredentials = false;
        console.log(error);
      });
  }

  logout() {
    this._authService.logout();
  }

}
