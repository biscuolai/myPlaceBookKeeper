import { ngBootstrapModule } from './../../shared/modules/ng-bootstrap.module';
import { UploadFileService } from './../file-upload/services/file-upload.service';
import { ListUploadComponent } from './../file-upload/file-upload-list/file-upload-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PaymentService } from './services/payment.service';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentRoutingModule } from './payment.routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { SharedModule } from '../../shared/components/shared.module';
import { FormUploadComponent } from '../file-upload/file-upload-form/file-upload-form.component';

@NgModule({
  declarations: [
    PaymentFormComponent,
    FormUploadComponent,
    ListUploadComponent
  ],
  imports: [
    CommonModule,
    ngBootstrapModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PaymentRoutingModule,

    AngularFirestoreModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
    //AngularFirestoreDocument,
  ],
  exports: [
  ],
  providers: [
    PaymentService,
    UploadFileService
  ]
})
export class PaymentModule { }
