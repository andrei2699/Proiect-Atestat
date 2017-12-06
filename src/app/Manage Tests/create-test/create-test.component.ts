import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateTestComponent implements OnInit {

  testName: string;
  numarIntrebari = 1;

  questions = [];

  constructor() { }

  ngOnInit() {
    this.sizeChanged(this.numarIntrebari);
  }

  sizeChanged(e) {
    this.questions = [];
    for (let i = 0; i < e; i++) {
      const t = { index: i + 1, points: 8 };
      this.questions.push(t);
    }
  }

}
