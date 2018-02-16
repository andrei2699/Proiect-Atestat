import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-preview-test',
  templateUrl: './preview-test.component.html',
  styleUrls: ['./preview-test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewTestComponent {

  constructor(
    public dialogRef: MatDialogRef<PreviewTestComponent>,
    @Inject(MAT_DIALOG_DATA) public test: any) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
