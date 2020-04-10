import { ProviderRoutingModule } from './provider.routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/components/shared.module';
import { MaterialModule } from './../../shared/modules/material.module';
import { ProviderService } from './services/provider.service';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderFormComponent } from './provider-form/provider-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProviderFormComponent,
    ProviderListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ProviderRoutingModule
  ],
  exports: [
    //ProviderFormComponent,
    //ProviderListComponent,
  ],
  providers: [
    ProviderService
  ]
})
export class ProviderModule { }
