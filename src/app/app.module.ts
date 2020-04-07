import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom modules
import { AppRoutingModule } from './app-routing.module';

// Custom components
import { ProviderFormComponent } from './components/provider-form/provider-form.component';

// Custom Model
// import { Policy } from './models/policy.model';

// Firebase / Firestore
import { AngularFireModule } from "@angular/fire";
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFirestore } from '@angular/fire/firestore';

import { environment } from "../environments/environment";
import { ProviderService } from './services/provider.service';
import { StudentComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import {
//   // MatExpansionModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
//   // MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule,
//   // MatFormFieldModule, MatRippleModule, MatNativeDateModule, MatGridListModule, MatCardModule,
//   // MatMenuModule, MatRadioModule, MatTabsModule, MatDialogModule,
//   MatInputModule
// } from '@angular/material/input';

import { SharedModule } from './shared/components/shared.module';
import { ProviderListComponent } from './components/provider-list/provider-list.component';
// import { CommonModule } from '@angular/common';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { MaterialModule } from './shared/modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ProviderFormComponent,
    StudentComponent,
    StudentListComponent,
    ProviderListComponent,
    MainNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'myplacebookkeeping'),
    // AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

    MaterialModule,

    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatProgressSpinnerModule,
    // MatButtonModule,
    // MatFormFieldModule,
    //  MatInputModule,
    // MatRippleModule,
  //  MatDatepickerModule,        // <----- import(must)
    // MatNativeDateModule,         // <----- import(optional)
   // MatSelectModule,
    // MatGridListModule,
    // MatCardModule,
    // MatMenuModule,
    // MatRadioModule,
    // MatExpansionModule,
    // MatTabsModule,
    // MatDialogModule

  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
  ],
  providers: [
    ProviderService,
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent],
  //exports:[FormDebugComponent]
})
export class AppModule { }
