import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm : NgForm;
  hide = true;
  constructor(public authService: AuthService) { }
  ngOnInit(): void {
  }

  register(){
    let formObject = this.registerForm.value;
    this.authService.register({username:formObject.username, email:formObject.email, surname:formObject.surname, lastname:formObject.lastname}, formObject.password);
  }


 



}
