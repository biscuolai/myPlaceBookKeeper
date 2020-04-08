import { RecordNotFoundComponent } from './record-not-found/record-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    FormDebugComponent,
    RecordNotFoundComponent,
  ],
  exports: [
    FormDebugComponent,
    RecordNotFoundComponent,
  ],
  providers: []
})
export class SharedModule { }
