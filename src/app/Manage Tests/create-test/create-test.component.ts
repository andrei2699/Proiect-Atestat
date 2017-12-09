import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Question } from '../question';
import { ConfirmDialog } from '../../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { MATERII } from '../fake-questions';
import { Test } from '../test-class';
import { TestsService } from '../tests.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateTestComponent implements OnInit {

  testName: string;
  materieSelectata: string;
  materii = MATERII;

  questions = [];
  constructor(public dialog: MatDialog,
    private _testsService: TestsService) { }

  ngOnInit() {
    this.addQuestion();
  }

  addQuestion() {
    const q = new Question();
    q.finished = false;
    this.questions.push(q);
  }

  deleteQuestion(index) {

    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '300px',
      data: { message: 'Esti sigur ca vrei sa stergi intrebarea ?', title: 'Stergere ?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.questions.splice(index, 1);
      }
    });
  }

  steps(i) {
    return i == this.questions.length - 1;
  }

  totalPuncte() {
    let t = 0;
    for (let i = 0; i < this.questions.length; i++) {
      t += this.questions[i].points;
    }
    return t;
  }

  getUnfinishedQuestions() {
    const qs = [];
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].finished) {
        qs.push(i);
      }
    }
    return qs;
  }

  finishedQuestions() {
    let t = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].finished) {
        t++;
      }
    }
    return t;
  }

  saveTest() {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '300px',
      data: { message: 'Salvezi testul ?', title: 'Salveaza' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const test = new Test(this.testName, this.materieSelectata, new Date());
        test.questions = this.questions;

        this._testsService.setTest(test).subscribe(res => {
          console.log(res);
        }, (error) => {
          console.log(error);
        });
      }
    });
  }

  isNotTestValid() {
    return !this.materieSelectata || !this.testName
      || this.totalPuncte() != 10 || this.finishedQuestions() != this.questions.length;
  }
}
