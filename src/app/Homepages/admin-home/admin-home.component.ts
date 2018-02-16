import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  GoToAdminPage() {
    this.router.navigateByUrl('admin-page');
  }
}
