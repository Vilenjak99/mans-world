import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { HomeAddProductComponent } from './home-add-product/home-add-product.component';
import { AddProductRoutingModule } from './add-product-routing.module'
import { FlexModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';





@NgModule({
  declarations: [HomeAddProductComponent],
  imports: [
    AddProductRoutingModule,
    CommonModule,
    FormsModule,
    FlexModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AddProductModule { }
