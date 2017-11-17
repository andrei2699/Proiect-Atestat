import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  confirmPassword: string;

  user = new FormControl('', Validators.required);
  pass = new FormControl('', Validators.required);
  confPass = new FormControl('', Validators.required);

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  getErrorMessage(field) {
    return field.hasError('required') ? 'You must enter a value' : '';
  }

  passwordsMatch() {
    return this.password === this.confirmPassword;
  }

  register() {
    console.log('User+pass:' + this.username + ' ' + this.password);
    this._authService.register(this.username, this.password).
      subscribe(res => {

      });
    // console.log('is logged in : ' + this._authService.loggedIn());
    // this._authService.login(this.username, this.password).subscribe(
    //   (loggedIn: any) => {
    //     console.log(loggedIn);
    //     // this._router.navigateByUrl(this.returnUrl);
    //   },
    //   (error) => {
    //     console.log(error);
    //   });
  }

}
