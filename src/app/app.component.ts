import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hasToken: boolean;

  constructor(private _authService: AuthService,
    private _jwtHelperService: JwtHelperService,
    private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.setHasToken();
      }
    });
  }

  logout() {
    this._authService.logout();
    this.router.navigateByUrl('/');
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  goHome() {
    this.router.navigateByUrl('/home');
  }

  private setHasToken() {
    this.hasToken = sessionStorage.getItem('token') != null;
  }
}
