import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportBudgetRoutingModule } from './support-budget.routing.module';
//import { MaterialModule } from './../../shared/modules/material.module';
import { SharedModule } from './../../shared/components/shared.module';
import { SupportBudgetService } from './service/support-budget.service';

@NgModule({
  declarations: [
    //SupportBudgetFormComponent,
    //SupportBudgetListComponent,
  ],
  imports: [
    CommonModule,
    //MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SupportBudgetRoutingModule
  ],
  exports: [
    //SupportBudgetFormComponent,
    //SupportBudgetListComponent,
  ],
  providers: [
    SupportBudgetService
  ]
})
export class SupportBudgetModule { }
