import { Component, ViewChild, HostListener } from '@angular/core';
import { AuthService } from './Manage Users/auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MATERII } from './Manage Tests/fake-questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _authService: AuthService,
    private _jwtHelperService: JwtHelperService,
    private router: Router) {
  }

  subjects = MATERII;

  logout() {
    this._authService.logout();
    this.router.navigateByUrl('/login');
  }

  isRole(role) {
    if (sessionStorage.getItem('token') == null) {
      return false;
    }
    return this._authService.hasRoles([role]);
  }

  goToLink(link) {
    this.router.navigateByUrl('/' + link);
  }

  goTonoteprof(link) {
    this.router.navigateByUrl('/noteprof/' + link);
  }

  playSnake() {
    // for testing
    // window.open('../assets/Snake/index.html', '_blank');

    // for build
    window.open('assets/Snake/index.html', '_blank');
  }
}
