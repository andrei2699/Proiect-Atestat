import { Injectable } from '@angular/core';
import { test } from './test';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class TestsService {

  constructor(
    private http: HttpClient) { }

  private testsUrl = 'api/getTests.php';

  getTests(): Observable<test[]> {
    return this.http.get<test[]>(this.testsUrl);
  }
}

