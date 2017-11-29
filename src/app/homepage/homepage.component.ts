import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  subjects = ['Informatica', 'Geografie', 'Matematica', 'Biologie', 'Chimie', 'Fizica', 'Engleza', 'Franceza', 'Romana', 'Istorie'];

  constructor() { }

  ngOnInit() {
  }

}
