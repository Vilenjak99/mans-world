import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  productName: string
}
@Component({
  selector: 'app-change-product-name-dialog',
  templateUrl: './change-product-name-dialog.component.html',
  styleUrls: ['./change-product-name-dialog.component.css']
})
export class ChangeProductNameDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public dialogRef: MatDialogRef<ChangeProductNameDialogComponent>) { }

  ngOnInit(): void {
  }

}
