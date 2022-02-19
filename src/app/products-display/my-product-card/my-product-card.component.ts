import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeDescriptionDialogComponent } from 'src/app/dialogs/change-description-dialog/change-description-dialog.component';
import { ChangeProductNameDialogComponent } from 'src/app/dialogs/change-product-name-dialog/change-product-name-dialog.component';
import { Product } from 'src/app/services/products/product.model';
import { ProductService } from 'src/app/services/products/product.service';
import { ChangePriceDialogComponent } from '../../dialogs/change-price-dialog/change-price-dialog.component';


@Component({
  selector: 'app-my-product-card',
  templateUrl: './my-product-card.component.html',
  styleUrls: ['./my-product-card.component.css']
})
export class MyProductCardComponent implements OnInit {
  @Input()item:Product;
  productOwner;
  numberOfStars;
  constructor(public productService:ProductService, public dialog: MatDialog) {
    this.numberOfStars = Array(5).fill(0).map((x,i)=>i);
   }

  ngOnInit(): void {
    console.log("my card");
  }

  getProperRatingStar(rating:number,index:number): string{
    return (index<rating) ? "star" : "star_border";
  }

  changePriceDialog(){
    const dialogRef = this.dialog.open(ChangePriceDialogComponent, {
      width: '30%',
      data: {price:this.item.price}
    });

  dialogRef.afterClosed().subscribe(result => {
      if(this.item.price!=result){
        this.item.price = result;
        this.productService.updateProduct(this.item);
      }
  });
  }

  changeProductNameDialog(){
    const dialogRef = this.dialog.open(ChangeProductNameDialogComponent, {
      width: '30%',
      data: {productName:this.item.productName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(this.item.productName!=result){
        this.item.productName = result;
        this.productService.updateProduct(this.item);
      }
  });
  }

  changeProductDescriptionDialog(){
    const dialogRef = this.dialog.open(ChangeDescriptionDialogComponent, {
      width: '30%',
      data: {productDescription:this.item.productDescription}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(this.item.productDescription!=result){
        this.item.productDescription = result;
        this.productService.updateProduct(this.item);
      }
  });
  }

  

}
