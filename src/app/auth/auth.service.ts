import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private loginUrl = 'api/login.php';
  private registerUrl = 'api/register.php';



  // public isLoggedIn: Boolean = false;
  // public name: String = '';

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  name: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private _httpClient: HttpClient,
    private _jwtHelperService: JwtHelperService) {

    this.isLoggedIn.subscribe(v => {
      console.log(v);
    });
    this.updateUserStatus();

  }


  updateUserStatus() {
    console.log('updateUserStatus');
    const token = sessionStorage.getItem('token');
    this.isLoggedIn.next((token != null) && !this._jwtHelperService.isTokenExpired());
    this.name.next(sessionStorage.getItem('username'));



  }

  private getRoles(): string[] {
    if (this.isLoggedIn) {

      const decodedToken = this._jwtHelperService.decodeToken(sessionStorage.getItem('token'));

      return decodedToken.data.roles;
    }
    return [];
  }

  hasRoles(roles: string[]) {
    if (roles == null) {
      return true;
    }
    const userRoles = this.getRoles();
    for (let i = 0; i < roles.length; i++) {
      if (userRoles.includes(roles[i])) {
        return true;
      }
    }
    return false;
  }

  register(user: string, password: string) {
    return this._httpClient.post(this.registerUrl, JSON.stringify({ user: user, password: password }))
      .do((response: any) => {
        console.log(response);
      })
      .map((res) => {
        return true;
      });
  }

  login(user: string, password: string) {

    this.logout();

    return this._httpClient.post(this.loginUrl, JSON.stringify({ user: user, password: password }))
      .do((response: any) => {
        const token = response.token;
        const decodedToken = this._jwtHelperService.decodeToken(token);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('username', decodedToken.data.name);
        this.updateUserStatus();
        // const decodedToken = this._jwtHelperService.decodeToken(token);
        // console.log(decodedToken);
        // this.roles = decodedToken.data.roles;
        // console.log(this.roles);
      });
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    this.updateUserStatus();

    console.log('Logged out !');
  }
}
