import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class TestsService {

  constructor(private http: HttpClient,
    private _jwtHelperService: JwtHelperService) { }

  private testsUrl = 'api/getTests.php';
  private questionsUrl = 'api/getQuestions.php';
  private setScoreUrl = 'api/setScore.php';

  getTests(materie) {
    return this.http.post(this.testsUrl, { Materie: materie });
  }

  setTest(test) {
    return this.http.post(this.testsUrl, { test: test });
  }

  getQuestions(idtest) {
    return this.http.post(this.questionsUrl, { idtest: idtest });
  }

  uploadTest(idtest, nota) {
    const token = sessionStorage.getItem('token');
    const decodedToken = this._jwtHelperService.decodeToken(token);
    const iduser = decodedToken.data.id;
    const d = new Date();
    const date = d.getFullYear() + '-' + d.getMonth() + "-" + d.getDate();
    const b = { iduser: iduser, idtest: idtest, score: nota, date: date };
    console.log(b);

    return this.http.post(this.setScoreUrl, b);
  }
}

