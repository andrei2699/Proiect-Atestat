import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { QUESTIONS } from '../fake-questions';
import { question } from '../question';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class QuestionComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }
  response = [];
  SharedData: number;
  questions = QUESTIONS;
  Rez;

  ngOnInit() { }

  alert() {
    this.Rez = 0;
    let g;
    for (let i = 0; i <= 9; i++) {
      if (this.response[i] == this.questions[1].correct) {
        this.Rez++;
      }
    }
    this.SharedData = this.Rez;

    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '400px',
      data: { message: ' ', title: 'Esti sigur ca vrei sa trimiti testul ?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      g = result;
      if (g == true) {
        this.GoTo("result");
      }
    });
  }
  public GoTo(a: string) {
    //this.router.navigateByUrl('/' + a);
    this.router.navigate(['/'+a,this.Rez]);
  }
}
