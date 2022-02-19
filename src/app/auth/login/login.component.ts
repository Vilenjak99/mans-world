import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthModule } from '../auth.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm : NgForm
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    let formObject = this.loginForm.value;
    this.authService.signIn(formObject.email,formObject.password);
  
  }

 

}
