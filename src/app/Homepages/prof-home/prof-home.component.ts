import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MATERII } from '../../Manage Tests/fake-questions';

@Component({
  selector: 'app-prof-home',
  templateUrl: './prof-home.component.html',
  styleUrls: ['./prof-home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfHomeComponent implements OnInit {

  createTestLink = '/create-test';
  launchTestLink = '/give-test';
  nume: string;
  materie: string;
  materii = MATERII;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  GoToCreateTest() {
    if (!this.nume || !this.materie) {
      this.router.navigate([this.createTestLink]);
    } else {
      this.router.navigate([this.createTestLink, this.nume, this.materie]);
    }
  }

  GoToLaunchTest() {
    this.router.navigateByUrl(this.launchTestLink);
  }
}
