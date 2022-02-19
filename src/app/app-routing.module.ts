import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { 
    path: 'add product',
    loadChildren:()=>
    import('./add-product/add-product.module').then((m)=>m.AddProductModule)
  },
  {
    path: 'product',
    loadChildren:()=>
    import('./product/product.module').then((m)=>m.ProductModule)
  },
  {
    path: 'advanced search',
    loadChildren:()=>
    import('./advanced-search/advanced-search.module').then((m)=>m.AdvancedSearchModule)
  },
  {
    path: 'auth',
    loadChildren:()=>
    import('./auth/auth.module').then((m)=>m.AuthModule)
  },
  {
    path: ':category',
    loadChildren:()=>
    import('./products-display/products-display.module').then((m)=>m.ProductsDisplayModule)
  },
  {
    path: ':category/:subCategory',
    loadChildren:()=>
    import('./products-display/products-display.module').then((m)=>m.ProductsDisplayModule)
  },
  {path: '**',
   component: NotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
