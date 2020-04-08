import { PaymentModule } from './components/payment/payment.module';
import { ProviderModule } from './components/provider/provider.module';
import { PaymentService } from './components/payment/service/payment.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom modules
import { AppRoutingModule } from './app-routing.module';

// Custom modules
import { MaterialModule } from './shared/modules/material.module';
import { SharedModule } from './shared/components/shared.module';

// Firebase / Firestore
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

// Custom components
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';

import { environment } from "../environments/environment";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig, 'myplacebookkeeping'),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    ProviderModule,
    PaymentModule
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
  ],
  providers: [
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
