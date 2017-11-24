import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class DataGetterService {

  getRolesUrl = 'api/getRoles.php';
  manageUsersUrl = 'api/manageUsers.php';
  requestRoleUrl = 'api/requestRole.php';
  manageRequestedRolesUrl = 'api/manageRequestedRoles.php';
  editUserInfoUrl = 'api/editUserInfo.php';

  constructor(private http: HttpClient) { }

  getRoles(withID) {
    return this.http.post(this.getRolesUrl, { withID: withID });
  }

  getUsers() {
    return this.http.get(this.manageUsersUrl);
  }

  changePassword(userId, newPass) {
    return this.http.post(this.editUserInfoUrl, { action: 'changePass', userid: userId, pass: newPass });
  }

  updateRoles(usersAndRoles) {
    return this.http.post(this.manageUsersUrl, { action: 'change', data: usersAndRoles });
  }

  deleteUser(user) {
    return this.http.post(this.manageUsersUrl, { action: 'delete', data: user });
  }

  getRolesForUser(id) {
    return this.http.post(this.getRolesUrl, { id: id });
  }

  requestRole(idUser, idRole, check) {
    return this.http.post(this.requestRoleUrl, { iduser: idUser, idrole: idRole, check: check });
  }

  getRequests() {
    return this.http.get(this.manageRequestedRolesUrl);
  }

  manageRequest(request, accepted) {
    return this.http.post(this.manageRequestedRolesUrl, { request: request, accepted: accepted });
  }
}
