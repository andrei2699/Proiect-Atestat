import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TestsService } from '../tests.service';
import { test } from '../test';

@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.component.html',
  styleUrls: ['./informatica.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InformaticaComponent implements OnInit {

  tests: test[];

  constructor(private testsService: TestsService) { }
  
  getTests(): void {
    this.testsService.getTests()
        .subscribe(tests => this.tests = tests);
  }

  ngOnInit(){
    this.getTests();
  };
}
