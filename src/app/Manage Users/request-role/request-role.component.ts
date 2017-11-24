import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataGetterService } from '../data-getter.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-request-role',
  templateUrl: './request-role.component.html',
  styleUrls: ['./request-role.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RequestRoleComponent implements OnInit {

  allRoles = [];
  myRoles = [];
  selected;
  showSelect: boolean;
  requestPending: boolean;
  userId;

  constructor(private _dataGetterService: DataGetterService, private _jwtHelperService: JwtHelperService) { }

  ngOnInit() {
    const token = sessionStorage.getItem('token');
    const decodedToken = this._jwtHelperService.decodeToken(token);
    this.userId = decodedToken.data.id;
    this._dataGetterService.getRolesForUser(this.userId).subscribe((roles: any) => {
      this.myRoles = roles;

      this._dataGetterService.getRoles(true).subscribe((res: any) => {
        console.log(res);
        for (let i = 0; i < res.length; i++) {
          if (!this.isInArray(this.myRoles, res[i].tip)) {
            this.allRoles.push({ value: res[i].id, viewValue: res[i].tip });
          }
        }

        if (this.allRoles.length == 0) {
          this.showSelect = false;
        }
      },
        (error) => {
          console.log(error);
        });

    }, (error) => {
      console.log(error);
    });

    this.showSelect = true;
    this.requestRole(true);
  }

  requestRole(check) {
    this._dataGetterService.requestRole(this.userId, this.selected, check).subscribe((res: any) => {
      if (res.status == 'pending' || !check) {
        this.requestPending = true;
      }
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }

  private isInArray(arr, tip) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == tip) {
        return true;
      }
    }
    return false;
  }
}
