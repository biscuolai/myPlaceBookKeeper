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
import { PolicyService } from './services/policy.service';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { StudentComponent } from './components/students/student.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ProviderFormComponent,
    PolicyListComponent,
    StudentComponent,
    StudentListComponent
    // Policy
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
    PolicyService
  ],
  bootstrap: [AppComponent],
  //exports:[FormDebugComponent]
})
export class AppModule { }
