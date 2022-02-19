import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/products/product.service';

export interface DialogData {
  price: number
}

@Component({
  selector: 'app-change-price-dialog',
  templateUrl: './change-price-dialog.component.html',
  styleUrls: ['./change-price-dialog.component.css']
})
export class ChangePriceDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public dialogRef: MatDialogRef<ChangePriceDialogComponent>) { }

  ngOnInit(): void {
  }

}
