import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordNotFoundComponent } from './../../shared/components/record-not-found/record-not-found.component';

const supportBudgetRoutes: Routes = [
  { path: '', component: RecordNotFoundComponent},
  { path: ':id', component: RecordNotFoundComponent },
  { path: 'notfound', component: RecordNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(supportBudgetRoutes)],
    exports: [RouterModule]
})
export class SupportBudgetRoutingModule { }
