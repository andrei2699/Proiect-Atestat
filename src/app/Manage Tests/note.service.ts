import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class NoteService {

  constructor(
    private http: HttpClient) { }

  private ScoresUrl = 'api/getScore.php';

  getNote(materie) {
    return this.http.post(this.ScoresUrl, { Materie: materie });
  }
}


