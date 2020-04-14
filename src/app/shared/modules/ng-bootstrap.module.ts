import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule, NgbDatepickerModule, NgbNavModule, NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgbDatepickerModule,
    NgbNavModule,
    NgbCollapseModule,
    NgbDropdownModule
  ],
  exports: [
    NgbModule,
    NgbDatepickerModule,
    NgbNavModule,
    NgbCollapseModule,
    NgbDropdownModule
  ],
})

export class ngBootstrapModule {
}
