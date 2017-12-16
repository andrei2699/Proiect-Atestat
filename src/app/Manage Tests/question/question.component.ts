import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { ConfirmDialog } from '../../confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { TestsService } from '../tests.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class QuestionComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private testService: TestsService,
    public dialog: MatDialog) { }
  response = [];
  questions;
  Rez;
  idtest;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const idtest = params['id'];
      this.idtest = idtest;
      this.testService.getQuestions(idtest).subscribe(q => {
        this.questions = q;
      })
    });
  }

  alert() {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '400px',
      data: { message: ' ', title: 'Esti sigur ca vrei sa trimiti testul ?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.Rez = 0;

        for (let i = 0; i < this.questions.length; i++) {
          if (this.response[i] - 1 == this.questions[i].correct) {
            this.Rez += this.questions[i].points;
          }
        }

        this.GoTo();
      }
    });
  }

  public GoTo() {

    this.testService.uploadTest(this.idtest, this.Rez).subscribe(r => {
      this.router.navigate(['/result', this.idtest, this.Rez]);
    });
  }
}
