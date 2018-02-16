import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../Manage Users/auth/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  isRole(role) {
    if (sessionStorage.getItem('token') == null) {
      return false;
    }
    return this._authService.hasRoles([role]);
  }

}
