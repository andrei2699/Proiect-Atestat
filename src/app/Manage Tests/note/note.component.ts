import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../note.service';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoteComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private noteService: NoteService) { }

  note;

  ngOnInit() {/*
  this.route.params.subscribe(params => {
    const materie = params['materie'];
    this.getNote(materie);
  });*/
  }/*
 getNote(materie) {
  console.log(materie);
  this.noteService.getNote(materie)
    .subscribe(note => this.note = note);
*/

}