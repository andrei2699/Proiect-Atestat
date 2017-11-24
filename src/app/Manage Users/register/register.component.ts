import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

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
  notOk: boolean;

  user = new FormControl('', Validators.required);
  pass = new FormControl('', Validators.required);
  confPass = new FormControl('', Validators.required);

  constructor(private _authService: AuthService,
    private _router: Router) { }

  ngOnInit() {
    this.notOk = false;
  }

  getErrorMessage(field) {
    return field.hasError('required') ? 'You must enter a value' : '';
  }

  passwordsMatch() {
    return this.password === this.confirmPassword;
  }

  register() {
    this._authService.register(this.username, this.password).
      subscribe(res => {
        this._authService.login(this.username, this.password).subscribe((r: any) => {
          this._router.navigateByUrl('/home');
        }, (error) => {
          console.log(error);
        });
      },
      (error) => {
        console.log(error);
        this.notOk = true;
      });
  }

}
