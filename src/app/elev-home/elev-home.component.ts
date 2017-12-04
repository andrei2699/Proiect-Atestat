import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-elev-home',
  templateUrl: './elev-home.component.html',
  styleUrls: ['./elev-home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ElevHomeComponent implements OnInit {
  subjects = ['Informatica', 'Geografie', 'Matematica', 'Biologie', 'Chimie', 'Fizica', 'Engleza', 'Franceza', 'Romana', 'Istorie'];
  constructor() { }

  ngOnInit() {
  }

}
