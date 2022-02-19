import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { OrdersDialogComponent } from '../dialogs/orders-dialog/orders-dialog.component';
import { ShoppingCartDialogComponent } from '../dialogs/shopping-cart-dialog/shopping-cart-dialog.component';
import { AuthService } from '../services/auth/auth.service';
import { ProductService } from '../services/products/product.service';
import { CartService } from '../services/shopping-cart/cart-service';

@Component({
  selector: 'app-navigation-right',
  templateUrl: './navigation-right.component.html',
  styleUrls: ['./navigation-right.component.css']
})
export class NavigationRightComponent implements OnInit {
  @Input() navElements = [];
  @Input() accountNavElements = [];
  @Input() xElPos = "";
  @Input() yElPos = "center";
  @Input() orientation = "";
  @Input() spacingBetwElements = "25";

  @Output() srchKeyUp = new EventEmitter<string>();
  @ViewChild('account') matmenu :MatMenu;
  @ViewChild('menuTrigger') accountMenuTrigger : MatMenuTrigger;

  // userSingedIn = JSON.parse(localStorage.getItem('user'));  svi user auth podaci
  userSingedIn : boolean = false;
  onItem : string = '';
  showSrch: boolean = false ;
  cartNumberOfItems$;

  constructor(public productService: ProductService,public authService: AuthService,public cartService: CartService, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.userSingedIn = this.authService.isLoggedIn;
    this.cartNumberOfItems$ = this.cartService.getItemsLenght();
  }
  emitterEmit(srchValue: string){
    this.srchKeyUp.emit(srchValue);
  }

  srch(event:any){
    let srchValue : string = event.target.value;
    setTimeout(()=>{
      console.log(srchValue);
      this.productService.filterByProductName(srchValue);
    },200)

  }

  triggerIfAuthElement(element){
    return (element.title=='auth') ? this.matmenu : "";
  }



  closeAccountMenu(){
    //iz nekog razloga ovde daje false
    if(this.accountMenuTrigger.menuOpen){
      this.accountMenuTrigger.closeMenu();
    }
  }
  

  logout(){
    if(this.userSingedIn){
      this.authService.logout();
    }
  }

  
  focus(itemTitle: string){
    this.onItem = itemTitle;
  }
  
  unfocus(arrLength: number){
    if(!arrLength){
      this.onItem = "";
    }
  }

  openShoppingCartDialog(){
  const dialogRef = this.dialog.open(ShoppingCartDialogComponent, {
    width: '30%'
    });
  }

  openOrdersDialog(){
    const dialogRef = this.dialog.open(OrdersDialogComponent,{
      width: '30%'
    })
  }
}


