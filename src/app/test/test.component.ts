import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { TestsService } from '../tests.service';
import { test } from '../test';
import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  constructor(private router: Router, private testsService: TestsService) {
  }

  tests;

  getTests(materie): void {
    this.testsService.getTests(materie)
      .subscribe(tests => this.tests = tests);
  }

  ngOnInit() {
    this.getTests('sss');
  }

  show(a: string) {
    let e = document.getElementById(a).getElementsByTagName("button");
    for (let i = 0; i <= 1; i++) {
      e[i].style.display = "initial";
    }
  }
  hide(a: string) {
    let e = document.getElementById(a).getElementsByTagName("button");
    for (let i = 0; i <= 1; i++) {
      e[i].style.display = "none";
    }
  }

  GoTo(a: string) {
    this.router.navigateByUrl('/questions');
  }
}
