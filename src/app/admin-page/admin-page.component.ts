import { Component, AfterViewInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataGetterService } from '../data-getter.service';
import { User } from '../user';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CanComponentDeactivate } from '../auth/auth-guard';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog.component';

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

  infoArr: InfoClass[] = [];

  constructor(private _dataGetterService: DataGetterService, public dialog: MatDialog) {
    this._dataGetterService.getRoles().subscribe((res: string[]) => {
      this.displayedColumns.push(...res);
      this.displayedColumns.push('action');
      this.roluri = res;
    });
  }

  ngAfterViewInit() {
    this.loadData();
  }

  makeChanges(e) {
    this.changesMade = true;
    const text = e.source.id;
    const values = text.split('.');
    const id = values[0];
    const role = values[1];

    const el = this.inArray(this.infoArr, id, role);
    if (el == null) {
      this.infoArr.push(new InfoClass(id, role, e.source.checked));
    } else {
      el.value = e.source.checked;
    }
  }

  saveChanges() {
    this.changesMade = false;

    this._dataGetterService.updateRoles(this.infoArr).subscribe((res: any) => {
      console.log(this.infoArr);
      this.infoArr = [];
      this.loadData();
    }, (error) => {
      console.log(error);
    });
  }

  private inArray(arr: InfoClass[], id, role) {

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id && arr[i].role == role) {
        return arr[i];
      }
    }
    return null;
  }

  canDeactivate() {
    if (this.changesMade) {
      return window.confirm('Discard changes?');
    }
    return true;
  }

  delete(user) {

    let dialogRef = this.dialog.open(ConfirmDialog, {
      width: '300px',
      data: { message: 'adasdasdasd' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this._dataGetterService.deleteUser(user).subscribe((res: any) => {
      //   this.loadData();
      // }, (error) => {
      //   console.log(error);
      // });
    });

    console.log(user);

  }

  loadData() {
    this._dataGetterService.getUsers().subscribe((res: any[]) => {
      this.dataSource.data = res;
    });
  }
}

export class InfoClass {
  id: string;
  role: string;
  value: string;

  constructor(i, r, v) {
    this.id = i;
    this.role = r;
    this.value = v;
  }
}
