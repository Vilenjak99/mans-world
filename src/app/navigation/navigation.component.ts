import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() navElements = [];
  @Input() xElPos = "";
  @Input() yElPos = "center";
  @Input() orientation = "";
  @Input() spacingBetwElements = "25";
  @Output() clickSideNavEl = new EventEmitter<void>();

  userSingedIn = JSON.parse(localStorage.getItem('user'));
  onItem = '';

  constructor(public authService: AuthService, private _eref: ElementRef) { }
  
  ngOnInit(): void {
    
  }
  emitterEmit(){
    this.clickSideNavEl.emit()
  }
  
  focus(itemTitle: string){
    this.onItem = itemTitle;
  }
  
  unfocus(arrLength: number){
    if(!arrLength){
      this.onItem = "";
    }
  }

}
