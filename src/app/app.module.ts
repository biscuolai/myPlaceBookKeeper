import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom modules
import { AppRoutingModule } from './app-routing.module';

// Custom modules
//import { MaterialModule } from './shared/modules/material.module';
import { SharedModule } from './shared/components/shared.module';
import { SupportBudgetModule } from './components/support-budget/support-budget.module';
import { PaymentModule } from './components/payment/payment.module';
import { ProviderModule } from './components/provider/provider.module';

// Firebase / Firestore
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

// Custom components
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';

import { environment } from "../environments/environment";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// Custom authentication services / components
import { AuthService } from './auth/services/auth.service';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    //MainNavigationComponent,

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
    //MaterialModule,
    ProviderModule,
    PaymentModule,
    SupportBudgetModule,
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
  ],
  providers: [
    AuthService,
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
