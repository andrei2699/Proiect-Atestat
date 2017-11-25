import { Component, AfterViewInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { DataGetterService } from '../data-getter.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {

  confirmPassword: string;
  password: string;
  @ViewChild('changePassButton') passButton;
  @ViewChild('f') form;
  @ViewChild('expPanel') expPanel;

  constructor(private _dataGetterService: DataGetterService,
    private _jwtHelperService: JwtHelperService,
    public snackBar: MatSnackBar) { }

  passwordsMatch() {
    return this.password === this.confirmPassword;
  }

  resetChangePassword() {
    this.confirmPassword = null;
    this.password = null;
    this.passButton.disabled = true;
    this.form.reset();
  }

  saveNewPassword() {

    const token = sessionStorage.getItem('token');
    const decodedToken = this._jwtHelperService.decodeToken(token);
    this._dataGetterService.changePassword(decodedToken.data.id, this.password).subscribe((res: any) => {
      this.expPanel.close();
      this.snackBar.open('Parola schimbata !', '', {
        duration: 2000,
      });
    }, (error) => {
      console.log(error);
    });
  }
}
