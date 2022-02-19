import { JsonPipe } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor() {
  }


  leftNavElements = [
    {title: 'home', img: 'home_outline'},
    {title: 'best sellers', img: 'whatshot'},
    {title: 'advanced search', img: 'manage_search'},
    {title: 'add product', img: 'add'}
  ];

  rightNavElements = [
    {title: 'search', img: 'search'},
    {title: 'auth', img: 'person_outline'},
    {title: 'shopping cart', img: 'shopping_cart'} ,
    {title: 'logout', img: 'logout'}
  ]


  matTabElements = [
    // stvari koje ce ici ispod menija
  ]
  
  resize = 0;
  orientation = '';
  ngOnInit() {
    
  }
  
  onResize(event){
    this.resize = (event.target.innerWidth <=780) ? 1 : 0;
    this.orientation = (event.target.innerWidth <=780) ? 'column' : 'row';
  }

  


  

}
