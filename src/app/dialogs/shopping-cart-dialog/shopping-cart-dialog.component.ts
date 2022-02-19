import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { Product } from 'src/app/services/products/product.model';
import { CartService } from 'src/app/services/shopping-cart/cart-service';

@Component({
  selector: 'app-shopping-cart-dialog',
  templateUrl: './shopping-cart-dialog.component.html',
  styleUrls: ['./shopping-cart-dialog.component.css']
})
export class ShoppingCartDialogComponent implements OnInit {
  products$;
  constructor(public cartService:CartService,public router: Router ,public auth:AuthService, public ordersService: OrdersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.products$ = this.cartService.getItems();
  }

  removeCartItem(product: Product){
    this.cartService.removeItem(product);
    console.log("item removed")
  }

  buy(products: Product[]){
    if(this.auth.isLoggedIn){
      this.ordersService.addOrder(products)
    }else{
      this.router.navigateByUrl('/auth');
    }
    
  }



}
