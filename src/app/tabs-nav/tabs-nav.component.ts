import { Component, ElementRef, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  host: {
    '(document:click)': 'closeOpenedTabsOnOutsideClick($event)',
  },
  selector: 'app-tabs-nav',
  templateUrl: './tabs-nav.component.html',
  styleUrls: ['./tabs-nav.component.css']
})
export class TabsNavComponent implements OnInit {
  @Input() elements="";
  @ViewChild('matmenu') matmenu :QueryList<MatMenu>;
  @ViewChild('menuTrigger1') menuTrigger1 : MatMenuTrigger;
  @ViewChild('menuTrigger2') menuTrigger2 : MatMenuTrigger;
  @ViewChild('menuTrigger3') menuTrigger3 : MatMenuTrigger;
  
  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
  }

  createArray() : Array<MatMenuTrigger>{
    let openedTabs :Array< MatMenuTrigger> = new Array;
    openedTabs.push(this.menuTrigger1);
    openedTabs.push(this.menuTrigger2);
    openedTabs.push(this.menuTrigger3);
    //openedTabs.push(this.menuTrigger3);

    return openedTabs;
  }

  closeOpenedTabsOnOutsideClick(event: Event){
    if (!this._eref.nativeElement.contains(event.target)){
      this.closeOpenedTabs();
    }
  }

  closeOpenedTabs(){
    this.createArray().forEach(element => {
      if(element.menuOpen){
        element.closeMenu();
      }
    });
  }

}
