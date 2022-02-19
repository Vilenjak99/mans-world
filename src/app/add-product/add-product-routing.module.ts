import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAddProductComponent } from './home-add-product/home-add-product.component';


const routes: Routes = [
  {path:'',component:HomeAddProductComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AddProductRoutingModule { }