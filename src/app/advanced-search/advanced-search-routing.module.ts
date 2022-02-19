import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdvancedSearchComponent } from './home-advanced-search/home-advanced-search.component';

const routes: Routes = [
  {path:'',component:HomeAdvancedSearchComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AdvancedSearchRoutingModule { }
