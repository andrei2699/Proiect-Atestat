import { Component, OnInit, ViewEncapsulation, Inject,Injectable } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { ConfirmDialog } from '../../confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { TestsService } from '../tests.service';
import { NoteService } from '../note.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { empty } from 'rxjs/Observer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  encapsulation: ViewEncapsulation.None
})
@Injectable()

export class QuestionComponent implements OnInit {

  userId;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private testService: TestsService,
    public dialog: MatDialog,
    private noteService: NoteService) {  }
  response = [];
  questions;
  Rez;
  idtest;
  nota;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const idtest = params['id'];
      this.idtest = idtest;
      this.testService.getQuestions(idtest).subscribe(q => {
        this.questions = q;
      })
      this.noteService.getNota(idtest).subscribe(a => {
        this.nota = a;
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
        this.testService.uploadTest(this.idtest, this.Rez).subscribe();
        this.GoTo();
      }
    });
  }

  public GoTo() {
 this.testService.uploadTest(this.idtest, this.Rez).subscribe(r => {
      this.router.navigate(['/result', this.idtest, this.Rez]);
    });
}
