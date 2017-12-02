import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TestsService } from '../tests.service';
import { test } from '../test';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  constructor(private testsService: TestsService,
    private route: ActivatedRoute) {
  }

  tests;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const materie = params['materie'];
      this.getTests(materie);
    });
  }


  getTests(materie) {
    console.log(materie);
    this.testsService.getTests(materie)
      .subscribe(tests => this.tests = tests);
  }
}
