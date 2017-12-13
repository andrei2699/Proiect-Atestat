import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class NoteService {

  userId;
  constructor(
    private http: HttpClient,private _jwtHelperService: JwtHelperService) {
      const token = sessionStorage.getItem('token');
      const decodedToken = this._jwtHelperService.decodeToken(token);
      this.userId=decodedToken.data.id;
     }
    private ScoresUrl = 'api/getScore.php';

  getNote(materie) {
    return this.http.post(this.ScoresUrl, { Materie: materie,IdUser: this.userId});
  }
}


