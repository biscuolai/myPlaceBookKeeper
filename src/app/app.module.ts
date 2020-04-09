import { ListUploadComponent } from './components/fileupload/list-upload/list-upload.component';
import { FormUploadComponent } from './components/fileupload/form-upload/form-upload.component';
import { PaymentModule } from './components/payment/payment.module';
import { ProviderModule } from './components/provider/provider.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom modules
import { AppRoutingModule } from './app-routing.module';

// Custom modules
import { MaterialModule } from './shared/modules/material.module';
import { SharedModule } from './shared/components/shared.module';
import { SupportBudgetModule } from './components/support-budget/support-budget.module';

// Firebase / Firestore
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

// Custom components
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';

import { environment } from "../environments/environment";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    //FormUploadComponent,
    //ListUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig, 'myplacebookkeeping'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,

    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    ProviderModule,
    PaymentModule,
    SupportBudgetModule
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
