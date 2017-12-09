import { Component, Input, Output, OnInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Question } from '../question';
import { validateBasis } from '@angular/flex-layout';

@Component({
  selector: 'app-create-question-test',
  templateUrl: './create-question-test.component.html',
  styleUrls: ['./create-question-test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateQuestionTestComponent implements OnInit {

  answers = [];
  correct;

  _finished: boolean;
  @Input()
  set finished(f) {
    this._finished = f;
    this.finishedChange.emit(this._finished);
  }
  get finished() {
    return this._finished;
  }
  @Output()
  finishedChange: EventEmitter<boolean> = new EventEmitter();

  _question: Question;
  @Input()
  set question(q) {
    this._question = q;
    this.questionChange.emit(this._question);
  }
  get question() {
    this._question.answer1 = this.answers[0];
    this._question.answer2 = this.answers[1];
    this._question.answer3 = this.answers[2];
    this._question.answer4 = this.answers[3];
    this._question.answer5 = this.answers[4];
    this._question.correct = this.correct;
    this.updateFinished();
    // this.question.finished = this._finished;
    return this._question;
  }
  @Output()
  questionChange: EventEmitter<Question> = new EventEmitter();

  Arr = Array;

  constructor() { }

  ngOnInit() {
    let i = 5;
    while (i > 0) {
      this.answers.push('');
      i--;
    }
  }

  verify(v) {
    if (v <= 0) {
      this.question.points = 1;
    } else if (v > 10) {
      this.question.points = 10;
    }
  }

  updateFinished() {
    let f = true;

    for (let i = 0; i < this.answers.length; i++) {
      if (!this.answers[i]) {
        f = false;
        break;
      }
    }

    if (!this.correct) {
      f = false;
    }

    if (!this._question.text) {
      f = false;
    }

    this._question.finished = f;
  }
}
