import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { TestsService } from '../tests.service';
import { test } from '../test';
import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit{

  constructor(private router: Router,private _myService: DataService,private testsService: TestsService) { 
  console.log(this._myService.getData());
  }

  tests: test[];

  getTests(): void {
    this.testsService.getTests()
        .subscribe(tests => this.tests = tests);
  }

  ngOnInit(){
    this.getTests();
  };
  show(a:string) { 
    let e =  document.getElementById(a).getElementsByTagName("button");
      for(let i=0;i<=1;i++){
        e[i].style.display = "initial";
       }
   }     
  hide(a:string) { 
    let e =  document.getElementById(a).getElementsByTagName("button");
      for(let i=0;i<=1;i++){
        e[i].style.display = "none"; 
      }
    }

GoTo(a :string){
    this.router.navigateByUrl('questions');
}
}
