import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductsDisplayComponent } from './home-products-display/home-products-display.component';

const routes: Routes = [
  {path:'',component:HomeProductsDisplayComponent},
  {path:'/my-products',component:HomeProductsDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsDisplayRoutingModule { }
