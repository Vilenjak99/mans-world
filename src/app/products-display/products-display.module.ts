import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsDisplayRoutingModule } from './products-display-routing.module';
import { HomeProductsDisplayComponent } from './home-products-display/home-products-display.component';
import { GridProductsDisplayComponent } from './grid-products-display/grid-products-display.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyProductCardComponent } from './my-product-card/my-product-card.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [HomeProductsDisplayComponent, GridProductsDisplayComponent, MyProductCardComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ProductsDisplayRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ProductsDisplayModule { }
