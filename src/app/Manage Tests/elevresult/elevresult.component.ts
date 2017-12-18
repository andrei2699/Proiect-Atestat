import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { TestsService } from '../tests.service';

@Component({
  selector: 'app-elevresult',
  templateUrl: './elevresult.component.html',
  styleUrls: ['./elevresult.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ElevresultComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private testService: TestsService) {
  }

  test;
  nota;

  ngOnInit() {
    this.test = this.route.params.subscribe(params => {
      const idtest = +params['idtest'];
      this.nota = +params['id'];
      //this.testService.uploadTest(idtest, this.nota).subscribe();
    });
  }

}

