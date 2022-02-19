import{Injectable} from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'
import { switchMap } from 'rxjs/operators';
import {Product} from './product.model';

export class Price  {
  priceFrom: number;
  priceTo: number;
}
@Injectable({
    providedIn: 'root'
  })
  
export class ProductService {
    items$: Observable<any[]|null>;
    uidFilter$: BehaviorSubject<string|null>;
    keywordsFilter$: BehaviorSubject<string[]|null>;
    conditionFilter$: BehaviorSubject<string|null>;
    freeShippingFilter$: BehaviorSubject<boolean|null>;
    priceFromFilter$: BehaviorSubject<Object|null>;
    priceToFilter$: BehaviorSubject<Object|null>;
    productNameFilter$: BehaviorSubject<string|null>;
    sortByFilter$: BehaviorSubject<string|null>;


    constructor( public afs: AngularFirestore){
        this.uidFilter$ = new BehaviorSubject(null);
        this.keywordsFilter$ = new BehaviorSubject(null);
        this.conditionFilter$ = new BehaviorSubject(null);
        this.freeShippingFilter$ = new BehaviorSubject(null);
        this.priceFromFilter$ = new BehaviorSubject(null);
        this.priceToFilter$ = new BehaviorSubject(null);
        this.productNameFilter$ = new BehaviorSubject(null);
        this.sortByFilter$ = new BehaviorSubject(null);


        this.items$ = combineLatest(
            [this.uidFilter$,this.keywordsFilter$,this.conditionFilter$,this.freeShippingFilter$,this.priceFromFilter$,this.priceToFilter$,this.productNameFilter$,this.sortByFilter$]
          ).pipe(
            switchMap(([uid,keywords, condition, freeShipping, priceFrom, priceTo, productName, sortBy]) => 
              afs.collection('products', ref => {
                let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
                if (uid) { query = query.where('uid', '==', uid) };
                if (keywords) { query = query.where('keywords', 'array-contains-any', keywords) };
                if (condition) { query = query.where('condition', '==', condition) };
                if (freeShipping) { query = query.where('freeShipping', '==', freeShipping) };
                if (priceFrom || priceTo) { query = query.where('price', '>=', priceFrom).where('price','<=',priceTo) };
                if (productName) { query = query.orderBy('productName').startAt(productName).endAt(productName + "\uf8ff") };
                if (sortBy) {
                  switch(sortBy){
                    case 'highest price':
                      query = query.orderBy('price','desc');
                      break;
                    case 'lowest price':
                      query = query.orderBy('price','asc');
                      break;
                    case 'newest':
                      //query = query.orderBy('date','desc'); MORA DA SE DODA DATUM U TABELU
                      break;
                    case 'oldest':
                      //query = query.orderBy('date','asc');
                      break;
                  
                  }
                  
                }
                return query;
              }).valueChanges()
            ),
            
          );
    }


    getProducts(){
        return this.items$;
      }
     
      filterByUid(uid: string|null) {
        this.uidFilter$.next(uid); 
      }
      filterByKeywords(keywords: string[]|null){
        this.keywordsFilter$.next(keywords);
      }
      filterByCondition(condition: string|null) {
        this.conditionFilter$.next(condition); 
      }
      filterByFreeShipping(freeShipping: boolean|null) {
        this.freeShippingFilter$.next(freeShipping); 
      }
      filterByPrice(price: Price|null) {
        this.priceFromFilter$.next(price.priceFrom); 
        this.priceToFilter$.next(price.priceTo);
      }
      filterByProductName(productName: string|null) {
        this.productNameFilter$.next(productName); 
      }
      filterBySortBy(sortBy: string|null){
        this.sortByFilter$.next(sortBy);
      }
      resetFilters(){
        this.uidFilter$.next(null);
        this.keywordsFilter$.next(null);
        this.conditionFilter$.next(null); 
        this.freeShippingFilter$.next(null);
        this.priceFromFilter$.next(null);
        this.priceToFilter$.next(null);
        this.productNameFilter$.next(null);
      }
      getImageURLFromStorage(imgId:string){
        return firebase.storage().ref().child('products').child(imgId).getDownloadURL();
      }

      setProduct(product: Product){
        const uid = JSON.parse(localStorage.getItem('user'))['uid'];
        product.uid = uid;
        this.afs.collection('products').add(product).then((docRef) => {
          console.log("Document successfully writtenwith id: ", docRef.id);
          docRef.update({productID: docRef.id});
        });
      }

      updateProduct(product:Product){
        this.afs.collection("products").doc(product.id).update(product)
        .then(()=>{
          console.log(`Document with id: ${product.id}, is updated successfully!`)
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });
      }
      
}