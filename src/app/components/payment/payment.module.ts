import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UploadFileService } from './../fileupload/upload-file.service';
import { ListUploadComponent } from './../fileupload/list-upload/list-upload.component';
import { FormUploadComponent } from './../fileupload/form-upload/form-upload.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/components/shared.module';
import { MaterialModule } from '../../shared/modules/material.module';
import { PaymentService } from './service/payment.service';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentRoutingModule } from './payment.routing.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    PaymentFormComponent,

    FormUploadComponent,
    ListUploadComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
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
