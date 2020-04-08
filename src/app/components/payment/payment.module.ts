import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/components/shared.module';
import { MaterialModule } from '../../shared/modules/material.module';
import { PaymentService } from './service/payment.service';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentRoutingModule } from './payment.routing.module';

@NgModule({
  declarations: [
    PaymentFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PaymentRoutingModule
  ],
  exports: [
  ],
  providers: [
    PaymentService
  ]
})
export class PaymentModule { }
