import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../products/product.model";
@Injectable({
    providedIn: 'root'
  })
  
export class PassingDataService {
    productList$:BehaviorSubject<Product[]|null>;
    product$:BehaviorSubject<Product|null>;
    constructor(){
        this.product$ = new BehaviorSubject(null);
    }

    setData(products$){
        this.productList$=null;
        this.productList$=products$;
    }

    setProduct(product: Product){
        this.product$.next(product)
    }


    getData(){
        return this.productList$;
    }
    getProduct(){
        return this.product$;
    }

}