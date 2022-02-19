import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-grid-products-display',
  templateUrl: './grid-products-display.component.html',
  styleUrls: ['./grid-products-display.component.css']
})
export class GridProductsDisplayComponent implements OnInit {
  

  @Input() products$ ;
  @Input() subCategory : string;
  products=[];
  pageProducts=[];
  length : number = 0;
  subscription;
  pageSize: number = 3;  //displaying three cards each row
  pageSizeOptions: number[] = [3, 6, 9, 12];
  breakpoint;

  constructor(private readonly route: ActivatedRoute){}
  ngOnInit() {
    if(window.innerWidth <= 780){
      this.breakpoint = 1;
    }
    else{
      this.breakpoint = (window.innerWidth <= 1200) ? 2 : 3;
    }

    
    
  }



  OnPageChange(products,event?){
    let startIndex;
    let endIndex
    if(event){
      startIndex = event.pageIndex * event.pageSize ;
      endIndex = startIndex + event.pageSize;
      if(endIndex > this.length){
        endIndex = this.length;
      }
    }else{
      startIndex = 0;
      endIndex = 3;
    }
    this.pageProducts = products.slice(startIndex, endIndex);
  }


  onResize() {
    if (window.innerWidth <=780){
      this.breakpoint = 1;
    }
    else{
      this.breakpoint = (window.innerWidth <= 1200) ? 2 : 3;
    }
  }


}
