import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private loginUrl = 'api/login.php';
  private registerUrl = 'api/register.php';

  constructor(
    private _httpClient: HttpClient,
    private _jwtHelperService: JwtHelperService) { }

  loggedIn() {

    const token = sessionStorage.getItem('token');
    if (token === null) {
      return false;
    }
    return !this._jwtHelperService.isTokenExpired();
  }

  private getRoles(): string[] {
    if (this.loggedIn()) {

      const decodedToken = this._jwtHelperService.decodeToken(sessionStorage.getItem('token'));

      return decodedToken.data.roles;
    }
    return [];
  }

  hasRoles(roles: string[]) {
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

    return this._httpClient.post(this.loginUrl, JSON.stringify({ user: user, password: password }))
      .do((response: any) => {
        console.log(response);
        const token = response.token;
        sessionStorage.setItem('token', token);
        // const decodedToken = this._jwtHelperService.decodeToken(token);
        // console.log(decodedToken);
        // this.roles = decodedToken.data.roles;
        // console.log(this.roles); 
      });
  }

  logout() {
    sessionStorage.removeItem('token');
    console.log('Logged out !');
  }
}
