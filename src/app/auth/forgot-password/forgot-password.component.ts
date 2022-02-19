import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild('f') forgotPswForm : NgForm;

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    let formObject = this.forgotPswForm.value
    this.authService.forgotPassword(formObject.email);
  }

}
