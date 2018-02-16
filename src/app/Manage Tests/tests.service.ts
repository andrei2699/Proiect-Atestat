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
  private givenTestUrl = 'api/getGivenTests.php';
  private allTestsUrl = 'api/getAllTests.php';
  private uploadTestUrl = 'api/index2.php';
  private questionsUrl = 'api/getQuestions.php';
  private getQuestionsHeaderUrl = 'api/getQuestionsHeader.php';
  private setScoreUrl = 'api/setScore.php';
  private launchTestUrl = 'api/launchTest.php';

  launchTest(idTest, usersIDS) {
    const date = this.getCurrentDate();
    return this.http.post(this.launchTestUrl, { idtest: idTest, date: date, userids: usersIDS });
  }

  getAllTests() {
    return this.http.get(this.allTestsUrl);
  }

  getTests(materie) {
    const token = sessionStorage.getItem('token');
    const decodedToken = this._jwtHelperService.decodeToken(token);
    const iduser = decodedToken.data.id;
    return this.http.post(this.testsUrl, { Materie: materie, iduser: iduser });
  }

  getGivenTests(materie) {
    const token = sessionStorage.getItem('token');
    const decodedToken = this._jwtHelperService.decodeToken(token);
    const iduser = decodedToken.data.id;
    return this.http.post(this.givenTestUrl, { Materie: materie, iduser: iduser });
  }

  setTest(test) {
    console.log(test);
    return this.http.post(this.uploadTestUrl, { test: test });
  }

  getQuestions(idtest) {
    return this.http.post(this.questionsUrl, { idtest: idtest });
  }

  getQuestionsHeader(idtest) {
    return this.http.post(this.getQuestionsHeaderUrl, { idtest: idtest });
  }

  uploadTest(idtest, nota) {
    const token = sessionStorage.getItem('token');
    const decodedToken = this._jwtHelperService.decodeToken(token);
    const iduser = decodedToken.data.id;
    const date = this.getCurrentDate();
    const b = { iduser: iduser, idtest: idtest, score: nota, date: date };
    console.log(b);

    return this.http.post(this.setScoreUrl, b);
  }

  getCurrentDate() {
    const d = new Date();
    const date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
    return date;
  }
}

