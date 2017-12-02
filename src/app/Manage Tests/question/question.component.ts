import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { QUESTIONS } from '../fake-questions';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { ConfirmDialog } from '../../confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class QuestionComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }
  response = [];
  questions;
  Rez;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const materie = params['test'];
      this.questions = QUESTIONS;
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
          if (this.response[i] == this.questions[i].correct) {
            this.Rez += this.questions[1].points;
          }
        }

        this.GoTo('result');
      }
    });
  }

  public GoTo(a: string) {
    this.router.navigate(['/' + a, this.Rez]);
  }
}
