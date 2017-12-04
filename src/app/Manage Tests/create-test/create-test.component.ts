import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateTestComponent implements OnInit {
  testName: string;

  constructor() { }

  ngOnInit() {
  }


}
