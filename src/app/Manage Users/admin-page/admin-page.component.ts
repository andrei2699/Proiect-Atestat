import { Component, AfterViewInit, ViewEncapsulation, Inject, HostListener } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { DataGetterService } from '../data-getter.service';
import { User } from '../user';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CanComponentDeactivate } from '../auth/auth-guard';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmDialog } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminPageComponent implements AfterViewInit, CanComponentDeactivate {

  changesMade: boolean;
  roluri: string[] = [];
  dataSource = new MatTableDataSource();
  displayedColumns = ['username'];
  infoArr: InfoClass[] = [];

  onlySaveIcon: boolean;

  requestsDisplayedColumns = ['username', 'role', 'accept', 'deny'];
  requestsDataSource = new MatTableDataSource();

  constructor(private _dataGetterService: DataGetterService, public dialog: MatDialog,
    public snackBar: MatSnackBar) {
    this._dataGetterService.getRoles(false).subscribe((res: string[]) => {
      this.displayedColumns.push(...res);
      this.displayedColumns.push('swap');
      this.displayedColumns.push('action');
      this.roluri = res;
    });
  }

  ngAfterViewInit() {
    this.loadDataUsers();
    this.loadRequests();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 365) {
      this.onlySaveIcon = false;

    } else {
      this.onlySaveIcon = true;
    }
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
      this.loadDataUsers();
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

      // const dialogRef = this.dialog.open(ConfirmDialog, {
      //   width: '300px',
      //   data: { title: 'Discard changes ?', message: 'Do you want to discard the changes ?' }
      // });

      // dialogRef.afterClosed().subscribe(result => {

      //   return true;
      // });

      return window.confirm('Renunti la schimbari ?');
    }
    return true;
    // return false;
  }

  delete(user) {

    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '300px',
      data: { message: 'Esti sigur ca vrei sa-l stergi pe ' + user.username + ' ?', title: 'Stergere ?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._dataGetterService.deleteUser(user).subscribe((res: any) => {
          this.loadDataUsers();
        }, (error) => {
          console.log(error);
        });
      }
    });
  }

  swap(user) {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '300px',
      data: { message: 'Parola lui ' + user.username + ' va fi schimbata in \'parola123\' ', title: 'Schimba parola' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const id = user.id;
        const pass = 'parola123';
        this._dataGetterService.changePassword(id, pass).subscribe((res: any) => {
          this.snackBar.open('Parola schimbata !', '', {
            duration: 2000,
          });
        }, (error) => {
          console.log(error);
        });
      }
    });
  }

  loadDataUsers() {
    this._dataGetterService.getUsers().subscribe((res: any[]) => {
      this.dataSource.data = res;
    });
  }

  loadRequests() {
    this._dataGetterService.getRequests().subscribe((res: any[]) => {
      this.requestsDataSource.data = res;
    });
  }

  isAdmin(user) {
    if (sessionStorage.getItem('username') == user.username) {
      return true;
    }
    return false;
  }

  manageRequest(request, accepted) {
    this._dataGetterService.manageRequest(request, accepted).subscribe((res: any) => {
      console.log(res);
      this.loadRequests();
      this.loadDataUsers();
    }, (error) => {
      console.log(error);
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
