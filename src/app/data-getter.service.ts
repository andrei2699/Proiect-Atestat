import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class DataGetterService {

  getRolesUrl = 'api/getRoles.php';
  manageUsersUrl = 'api/manageUsers.php';

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get(this.getRolesUrl);
  }

  getUsers() {
    return this.http.get(this.manageUsersUrl);
  }

  updateRoles(usersAndRoles) {
    const json = JSON.stringify(usersAndRoles);
    console.log(json);
    return this.http.post(this.manageUsersUrl, { action: 'change', data: json });
  }

}
