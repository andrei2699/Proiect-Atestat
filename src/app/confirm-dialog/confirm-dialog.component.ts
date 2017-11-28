import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialog implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) {
    this.data = this.data || {};
    this.data.title = this.data.title || 'Confirmare';
    this.data.confirmText = this.data.confirmText || 'Confirmare';
    this.data.cancelText = this.data.cancelText || 'Anulare';
    this.data.message = this.data.message || '?';

  }

  ngOnInit() {
  }
}
