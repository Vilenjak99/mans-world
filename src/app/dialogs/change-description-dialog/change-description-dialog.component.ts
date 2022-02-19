import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  productDescription: string
}
@Component({
  selector: 'app-change-description-dialog',
  templateUrl: './change-description-dialog.component.html',
  styleUrls: ['./change-description-dialog.component.css']
})
export class ChangeDescriptionDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public dialogRef: MatDialogRef<ChangeDescriptionDialogComponent>) { }

  ngOnInit(): void {
  }

}
