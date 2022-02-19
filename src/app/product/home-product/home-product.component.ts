import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PassingDataService } from 'src/app/services/passing-data/passing-data.service';
import { Product } from 'src/app/services/products/product.model';
import { CartService } from 'src/app/services/shopping-cart/cart-service';
 
@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {
  product$:BehaviorSubject<Product|null>;
  numberOfStars;
  constructor(public passingDataService: PassingDataService, public cartService: CartService) { }

  ngOnInit(): void {
   this.product$ = this.passingDataService.getProduct();
   this.numberOfStars = Array(5).fill(0).map((x,i)=>i);
  }
  getProperRatingStar(rating:number,index:number): string{
    return (index<rating) ? "star" : "star_border";
  }
  exactRating(){

  }
  addToCart(product: Product){
    this.cartService.addToCart(product);
  }


}
