import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedSearchRoutingModule } from './advanced-search-routing.module';
import { HomeAdvancedSearchComponent } from './home-advanced-search/home-advanced-search.component';
import { MaterialModule } from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { FlexModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HomeAdvancedSearchComponent],
  imports: [
    CommonModule,
    AdvancedSearchRoutingModule,
    MaterialModule,
    FormsModule,
    FlexModule,
    ReactiveFormsModule
  ]
})
export class AdvancedSearchModule { }
