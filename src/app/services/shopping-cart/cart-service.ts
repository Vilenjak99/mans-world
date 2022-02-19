import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
    
    items: Product[] = [];
    items$: BehaviorSubject<Product[]|null>;
    itemsLenght$: BehaviorSubject<number|null>
    constructor(){
        this.items$ = new BehaviorSubject(null);
        this.itemsLenght$ = new BehaviorSubject(null);
    }
  
    addToCart(product: Product) {
      this.items.push(product);
      this.items$.next(this.items);
      this.itemsLenght$.next(this.items.length);
    }
  
    getItems() {
      return this.items$;
    }

    getItemsLenght(){
        return this.itemsLenght$;
    }

    removeItem(product: Product){
        let index = this.items.indexOf(product)
        this.items.splice(index,1);
        this.items$.next(this.items);
        if(this.items.length==0){
            this.itemsLenght$.next(null);
        }else{
            this.itemsLenght$.next(this.items.length);
        }
        
    }
  
    clearCart() {
      this.items = [];
      this.items$ = null;
      return this.items$;
    }
  }