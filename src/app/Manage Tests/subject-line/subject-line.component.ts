import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-line',
  templateUrl: './subject-line.component.html',
  styleUrls: ['./subject-line.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubjectLineComponent implements OnInit {

  constructor(private router: Router) { }

  display: boolean;

  @Input()
  link;
  @Input()
  title;
  @Input()
  firstButtonText: string;
  @Input()
  secondButtonText: string;
  @Input()
  params;

  ngOnInit() {
  }

  show() {
    this.display = true;
  }

  hide() {
    this.display = false;
  }

  GoTo() {
    const r = '/' + this.link;
    if (this.params) {
      this.router.navigate([r, this.params]);
    } else {
      this.router.navigate([r]);
    }
  }
}
