import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { MATERII } from '../fake-questions';
import { TestsService } from '../tests.service';
import { MatSort, MatPaginator, MatTableDataSource, MatSelect, MatInput, MatDialog } from '@angular/material';
import { DataGetterService } from '../../Manage Users/data-getter.service';
import { Button } from 'protractor';
import { Router } from '@angular/router';
import { PreviewTestComponent } from '../preview-test/preview-test.component';

@Component({
  selector: 'app-give-test',
  templateUrl: './give-test.component.html',
  styleUrls: ['./give-test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GiveTestComponent implements OnInit, AfterViewInit {

  testSelectat;
  materieSelectata: string;
  materii = MATERII;
  currentTests = [];
  tests = [];
  allUsers = [];
  selectAll = false;

  dataSource = new MatTableDataSource();
  displayedColumns = ['Nume', 'Acces'];
  selectedUsersCount = 0;

  constructor(private _testService: TestsService,
    private _dataGetterService: DataGetterService,
    private router: Router,
    public dialog: MatDialog) { }

  filteredTests: Observable<string[]>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSelect) disciplinaDropdown: MatSelect;

  ngOnInit() {

    this._testService.getAllTests().subscribe((res: any) => {
      this.tests = res;

      this.getUsers();
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getUsers() {
    this._dataGetterService.getAllElevi().subscribe((res: any[]) => {
      this.allUsers = res;

      for (let i = 0; i < this.allUsers.length; i++) {
        this.allUsers[i].access = false;
      }

      this.dataSource.data = this.allUsers;
    });
  }

  selectChange() {
    this.testSelectat = undefined;
    this.currentTests = [];

    for (let i = 0; i < this.tests.length; i++) {
      if (this.tests[i].Materie === this.disciplinaDropdown.value) {
        this.currentTests.push(this.tests[i]);
      }
    }
  }

  selectDeselectAll(value) {
    this.selectAll = value;

    for (let i = 0; i < this.allUsers.length; i++) {
      this.allUsers[i].access = this.selectAll;
    }

    this.countSelected();
  }

  lanseazaTest() {

    const users = [];

    for (let i = 0; i < this.allUsers.length; i++) {
      if (this.allUsers[i].access) {
        users.push(this.allUsers[i].ID);
      }
    }

    this._testService.launchTest(this.testSelectat.ID, users).subscribe(res => {
      this.router.navigate(['/home']);
    });
  }

  makeChanges(element) {
    element.access = !element.access;

    this.countSelected();
  }

  countSelected() {
    let counter = 0;
    for (let i = 0; i < this.allUsers.length; i++) {
      if (this.allUsers[i].access) {
        counter++;
      }
    }
    this.selectedUsersCount = counter;
  }

  previewTest() {
    this._testService.getQuestionsHeader(this.testSelectat.ID).subscribe(res => {

      const dialogRef = this.dialog.open(PreviewTestComponent, {
        data: { Title: this.testSelectat.Title, Materie: this.testSelectat.Materie, questions: res }
      });
    });

  }

}
