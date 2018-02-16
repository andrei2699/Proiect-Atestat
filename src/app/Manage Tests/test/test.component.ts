import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TestsService } from '../tests.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  constructor(private testsService: TestsService,
    private route: ActivatedRoute,private router: Router) {
  }

  tests;
  dataSource = new MatTableDataSource();

  ngOnInit() {
    this.route.params.subscribe(params => {
      const materie = params['materie'];
      this.getTests(materie);
    });
  }
  displayedColumns = ['Data', 'Nume Test', 'Start Test'];

  getTests(materie) {
    console.log(materie);
    this.testsService.getTests(materie)
      .subscribe((tests: any[]) =>{ this.dataSource.data = tests});
  }
   GoTo(a) {
    this.router.navigate(['/questions',a]);
  }
 
    applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  
}
