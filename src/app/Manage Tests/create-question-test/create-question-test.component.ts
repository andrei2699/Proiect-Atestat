import { Component, Input, Output, OnInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-create-question-test',
  templateUrl: './create-question-test.component.html',
  styleUrls: ['./create-question-test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateQuestionTestComponent implements OnInit {

  question: Question;
  text;
  a1;
  a2;
  a3;
  a4;
  a5;
  a6;
  correct;
  _points = 0;
  @Input()
  set points(p) {
    this._points = p;
  }
  get points() { return this._points; }


  Arr = Array;

  constructor() { }

  ngOnInit() {
  }

  checkBox(e, index) {
    if (e.checked) {
      this.correct = index + 1;
    } else {
      this.correct = undefined;
    }
  }

  getCorrectAnswer() {
    return this.correct;
  }
}
