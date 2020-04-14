import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../services/auth.service";
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  signIn() {
    console.log('form', this.form);

    if (this.form.valid) {
      console.log('form is valid');
      this.authService.SignIn(this.form.get('email').value, this.form.get('password').value);
    }
  }

  signUp() {
    this.router.navigate(['/signup']);
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  registerUser() {
    this.router.navigate(['/register-user']);
  }

  googleAuth() {
    this.authService.GoogleAuth();
  }
}
