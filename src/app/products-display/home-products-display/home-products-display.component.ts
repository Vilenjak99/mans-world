import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassingDataService } from 'src/app/services/passing-data/passing-data.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-home-products-display',
  templateUrl: './home-products-display.component.html',
  styleUrls: ['./home-products-display.component.css']
})
export class HomeProductsDisplayComponent implements OnInit {
  
  category:string = "";
  subCategory:string = "";
  products$;
  //
  constructor(private readonly route: ActivatedRoute, public productService: ProductService, private passingDataService: PassingDataService) {
    
  }

  ngOnInit():void {
    if(this.passingDataService.getData()){
      this.products$ = this.passingDataService.getData();
    }else{
      console.log("nije uso")
      this.getProducts();
    }
    
  }

  getURLparameter(){
    this.route.paramMap.subscribe(params => {
      this.subCategory = params.get("subCategory");
      this.category = params.get("category");
    });
  }

  //tu trebas da pokupis iz baze produkte na osnovu toga da li je my products ili obicni product
  getProducts(){
    this.getURLparameter();
    if(this.subCategory == "my-products"){
      this.productService.filterByUid(JSON.parse(localStorage.getItem('user'))['uid']);
    }else{
      this.productService.resetFilters();
    }
    this.products$ = this.productService.getProducts();
  }
  

}
