import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PassingDataService } from 'src/app/services/passing-data/passing-data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input()item:any;
  users$;
  constructor(public authService: AuthService, private router: Router, public passingDataService: PassingDataService) {
    
  }

  ngOnInit(): void {
    console.log("Item uid koji ubacujem iz roditeljske komponente:"+this.item.uid);
    this.authService.filterByUid(this.item.uid);
    console.log("Vrednost uid observable u servisu posle dodeljivanja vrednosti: "+this.authService.uidFilter$.value);
    this.users$ = this.authService.getUsers();
    this.authService.resetFilters();
  }

  route(){
    this.passingDataService.setProduct(this.item);
    this.router.navigateByUrl('/product');
  }

}
