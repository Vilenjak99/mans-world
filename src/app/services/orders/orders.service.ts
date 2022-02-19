import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../products/product.model';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
    
    items$: Observable<Product[]>;
    
    constructor(public afs: AngularFirestore){
        this.items$//= upit u bazu 
        
    }
    
    acceptOrder(order: Order){
        //posalji mail korisniku da je prihvaceno 
        this.deleteOrder(order);
    }

    declineOrder(order: Order){
        //posalji mail korisniku da je odbijeno
        this.deleteOrder(order);
    }

    deleteOrder(order:Order){
        //obrisi u bazi
    }

    addOrder(products: Product[]){
        // let customerID =  JSON.parse(localStorage.getItem('user'))['uid'];
        // products.forEach(product => {
        //     let order:Order = {product: product, customerID:customerID};
        //     this.afs.collection('orders').add(order).then((docRef) => {
        //         console.log("Order successfully written with id: ", docRef.id);
        //       });
        // });
    }

    
  
  }