import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { Question } from '../question';
import { ConfirmDialog } from '../../confirm-dialog/confirm-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MATERII } from '../fake-questions';
import { Test } from '../test-class';
import { TestsService } from '../tests.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from '../../Manage Users/auth/auth-guard';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateTestComponent implements OnInit, CanComponentDeactivate {

  testName: string;
  materieSelectata: string;
  materii = MATERII;
  questions = [];
  goHome: boolean;
  @ViewChild('accordion') accordion;

  constructor(public dialog: MatDialog,
    private _testsService: TestsService,
    private router: Router,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.goHome = false;
    this.addQuestion();
    this.route.params.subscribe(params => {
      const nume = params['nume'];
      const materie = params['materie'];
      this.testName = nume;
      this.materieSelectata = materie;
    });
  }

  canDeactivate() {
    if (this.goHome) {
      return true;
    }
    return window.confirm('Esti sigur ca vrei sa parasesti pagina ?');
  }

  addQuestion() {
    const q = new Question();
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

    let allQuestionsValid = true;
    const children = this.accordion.nativeElement.children;

    for (let i = 0; i < children.length; i++) {
      const form = children[i].querySelector('div').
        querySelector('div').querySelector('form');
      const invalid = form.className.indexOf('ng-invalid');
      if (invalid != -1) {
        allQuestionsValid = false;
        break;
      }
    }

    if (!allQuestionsValid) {
      this.snackBar.open('Nu toate intrebarile sunt valide !', '', {
        duration: 2000,
      });
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '300px',
      data: { message: 'Salvezi testul ?', title: 'Salveaza' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        var d = new Date();
        var date = d.getFullYear() + '-' + d.getMonth() + "-" + d.getDate();
        const test = new Test(this.testName, this.materieSelectata, date);
        test.questions = this.questions;

        this._testsService.setTest(test).subscribe(res => {
          const r = this.snackBar.open('Test creat cu succes !', '', {
            duration: 2000,
          });
          r.afterDismissed().subscribe(a => {
            console.log(res);
            this.router.navigate(['/home']);
            this.goHome = true;
          });
        }, (error) => {
          if (error.status == 409) {
            this.snackBar.open('Numele testul pentru materia ' + this.materieSelectata + ' deja exista !', '', {
              duration: 2000,
            });
          }
          console.log(error);
        });
      }
    });
  }

  isNotTestValid() {

    return !this.materieSelectata || !this.testName
      || this.totalPuncte() != 10;
  }
}
