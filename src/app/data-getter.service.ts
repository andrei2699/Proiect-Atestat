import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class DataGetterService {

  getRolesUrl = 'api/getRoles.php';
  manageUsersUrl = 'api/manageUsers.php';

  ELEMENT_DATA: User[] = [
    { id: 1, username: 'admin', roles: ['admin', 'elev', 'profesor'] },
    { id: 2, username: 'elev1', roles: ['elev'] },
    { id: 3, username: 'elev2', roles: ['elev'] },
    { id: 4, username: 'profesor1', roles: ['elev', 'profesor'] },
    { id: 5, username: 'profesor1', roles: ['elev', 'profesor'] },
  ];

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get(this.getRolesUrl);
  }

  getUsers() {
    return this.http.get(this.manageUsersUrl);
  }

  updateRoles(usersAndRoles) {
    console.log(usersAndRoles);
    return this.http.post(this.manageUsersUrl, { action: 'change', data: usersAndRoles });
  }

}
