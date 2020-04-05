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
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

import { environment } from "../environments/environment";
import { ProviderService } from './services/provider.service';
import { StudentComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  // MatExpansionModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  // MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule,
  // MatFormFieldModule, MatRippleModule, MatNativeDateModule, MatGridListModule, MatCardModule,
  // MatMenuModule, MatRadioModule, MatTabsModule, MatDialogModule, 
  MatInputModule 
} from '@angular/material/input';
import { SharedModule } from './shared/shared.module';
import { ProviderListComponent } from './components/provider-list/provider-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProviderFormComponent,
    StudentComponent,
    StudentListComponent,
    ProviderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

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
     MatInputModule,
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
  providers: [
    AngularFirestore,
    ProviderService
  ],
  bootstrap: [AppComponent],
  //exports:[FormDebugComponent]
})
export class AppModule { }
