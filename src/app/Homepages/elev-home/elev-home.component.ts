import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MATERII } from '../../Manage Tests/fake-questions';

@Component({
  selector: 'app-elev-home',
  templateUrl: './elev-home.component.html',
  styleUrls: ['./elev-home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ElevHomeComponent implements OnInit {

  subjects = MATERII;
  constructor() { }

  ngOnInit() {
  }

}
