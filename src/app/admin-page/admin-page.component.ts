import { Component, AfterViewInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataGetterService } from '../data-getter.service';
import { User } from '../user';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CanComponentDeactivate } from '../auth/auth-guard';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminPageComponent implements AfterViewInit, CanComponentDeactivate {

  changesMade: boolean;
  displayedColumns = ['username'];
  roluri: string[] = [];
  dataSource = new MatTableDataSource();

  userAndRolesArr: string[] = [];

  constructor(private _dataGetterService: DataGetterService, public dialog: MatDialog) {
    this._dataGetterService.getRoles().subscribe((res: string[]) => {
      this.displayedColumns.push(...res);
      this.roluri = res;
    });
  }

  ngAfterViewInit() {
    this._dataGetterService.getUsers().subscribe((res: any[]) => {
      this.dataSource.data = res;
    });
  }

  makeChanges(e) {
    this.changesMade = true;
    const text = e.source.id;

    if (this.userAndRolesArr.indexOf(text) === -1) {
      this.userAndRolesArr.push(text);
    }
  }

  saveChanges() {
    this.changesMade = false;
    this._dataGetterService.updateRoles(this.userAndRolesArr);
  }

  canDeactivate() {
    if (this.changesMade) {
      return window.confirm('Discard changes?');
    }
    return false;
  }
}

