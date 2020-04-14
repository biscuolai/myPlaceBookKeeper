import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom routing modules
import { AppRoutingModule } from './app-routing.module';

// Custom modules
import { SharedModule } from './shared/components/shared.module';
import { SupportBudgetModule } from './components/support-budget/support-budget.module';
import { PaymentModule } from './components/payment/payment.module';
import { ProviderModule } from './components/provider/provider.module';
import { ngBootstrapModule } from './shared/modules/ng-bootstrap.module';

// Firebase / Firestore
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from "../environments/environment";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Custom authentication services / components
import { AuthService } from './auth/services/auth.service';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from './utils/ngbDateParserFormatter.adapter';

@NgModule({
  declarations: [
    AppComponent,

    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig, 'myplacebookkeeping'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    FormsModule,
    ReactiveFormsModule,

    SharedModule,
    ProviderModule,
    PaymentModule,
    SupportBudgetModule,

    ngBootstrapModule,
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
  ],
  providers: [
    AuthService,
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
