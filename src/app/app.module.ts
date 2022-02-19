import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { FireBaseModule } from './firebase.module';
import { AuthService } from './services/auth/auth.service';
import { TabsNavComponent } from './tabs-nav/tabs-nav.component';
import { NavigationRightComponent } from './navigation-right/navigation-right.component';
import { ChangeDescriptionDialogComponent } from './dialogs/change-description-dialog/change-description-dialog.component';
import { ChangeProductNameDialogComponent } from './dialogs/change-product-name-dialog/change-product-name-dialog.component';
import { ChangePriceDialogComponent} from './dialogs/change-price-dialog/change-price-dialog.component';
import { ProductService } from './services/products/product.service';
import { PassingDataService } from './services/passing-data/passing-data.service';
import { ShoppingCartDialogComponent } from './dialogs/shopping-cart-dialog/shopping-cart-dialog.component';
import { OrdersDialogComponent } from './dialogs/orders-dialog/orders-dialog.component';
import { CartService } from './services/shopping-cart/cart-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavigationComponent,
    TabsNavComponent,
    NavigationRightComponent,
    ChangeDescriptionDialogComponent,
    ChangeProductNameDialogComponent,
    ChangePriceDialogComponent,
    ShoppingCartDialogComponent,
    OrdersDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FireBaseModule
  ],
  
  providers: [AuthService,ProductService,PassingDataService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
