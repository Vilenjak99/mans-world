import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/products/product.service';
import { PassingDataService } from 'src/app/services/passing-data/passing-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-advanced-search',
  templateUrl: './home-advanced-search.component.html',
  styleUrls: ['./home-advanced-search.component.css']
})
export class HomeAdvancedSearchComponent implements OnInit {
  formTemplate = new FormGroup({
    keywords: new FormControl(''),
    condition: new FormControl(''),
    freeShipping: new FormControl(''),
    sortBy: new FormControl(''),
    priceFrom: new FormControl(''),
    priceTo: new FormControl('')
  });
  conditions = ['new','like new', 'used'];
  selectedConditions = [];
  sortingType = ['highest price','lowest price','newest','oldest'];
  constructor(public productService: ProductService, public passingDataService: PassingDataService, private router: Router) { }

  ngOnInit(): void {
  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  keywords: Array<string> = new Array();

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    // Clear the input value
    if (event.input) {
      event.input.value = '';
    }
  }

  remove(word: string): void {
    const index = this.keywords.indexOf(word);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  advancedSearch(form:NgForm){
    //Najpre ubaci vrednosti(jer iz nekog razloga ngModel prihvata samo zadnju vrednost)
    form.value.keywordsInput = this.keywords;
    console.log("price "+form.value.priceFrom);
    console.log(form.value.condition);
    if(this.keywords.length){
      this.productService.filterByKeywords(form.value.keywordsInput);
    }
    if(form.value.condition){
      this.productService.filterByCondition(form.value.condition);
    }
    if(form.value.freeShipping){
      this.productService.filterByFreeShipping(form.value.freeShipping);
    }
    if(form.value.sortBy){
      this.productService.filterBySortBy(form.value.sortBy);
    }
    if(form.value.priceFrom || form.value.priceTo){
      let priceFrom = (form.value.priceFrom) ? form.value.priceFrom : 0;
      let priceTo = (form.value.priceTo) ? form.value.priceTo : null
      this.productService.filterByPrice({priceFrom: priceFrom, priceTo: priceTo});
    }
    this.productService.getProducts().subscribe(value=>console.log(value))
    this.passingDataService.setData(this.productService.getProducts());
    this.router.navigateByUrl('/products-display');
  }

  // selectCondition(event){
  //   if(event.source.checked){
  //     this.selectedConditions.push(event.source.value);
  //   }else{
  //     let index = this.selectedConditions.indexOf(event.source.value);
  //     this.selectedConditions.splice(index,1);
  //   }
    
  // }

}
