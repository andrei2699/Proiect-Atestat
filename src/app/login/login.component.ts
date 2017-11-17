import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

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

  constructor(private _authService: AuthService,
    private _jwtHelperService: JwtHelperService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/home';
    this.usernameOrPasswordWrong = false;
  }

  getErrorMessage(field) {
    return field.hasError('required') ? 'You must enter a value' : '';
  }

  login() {
    console.log('User+pass:' + this.username + ' ' + this.password);

    console.log('is logged in : ' + this._authService.loggedIn());
    this._authService.login(this.username, this.password).subscribe(
      (loggedIn: any) => {
        console.log(loggedIn);
        this._router.navigateByUrl(this.returnUrl);
      },
      (error) => {
        this.usernameOrPasswordWrong = true;
        console.log(error);
      });
  }

  logout() {
    this._authService.logout();
  }

}
