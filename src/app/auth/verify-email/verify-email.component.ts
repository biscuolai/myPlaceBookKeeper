import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../services/auth.service";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  user: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.userData;
  }

  sendVerificationMail(){
    this.authService.SendVerificationMail();
  }

}
