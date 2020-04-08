import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentFormComponent } from './payment-form/payment-form.component';

const paymentRoutes: Routes = [
  { path: '', component: PaymentFormComponent},
  { path: ':id', component: PaymentFormComponent },
];
  // { path: 'notfound', component: RecordNotFoundComponent },
        // { path: 'dashboard', component: MainDashboardComponent },
        // , resolve: { task: TaskDetailsResolverGuard }
         //},
        // { path: ':id/edit', component: StudentComponent
        // , canDeactivate: [FormDeactivateGuard]

  //]
  //}
//];

@NgModule({
    imports: [RouterModule.forChild(paymentRoutes)],
    exports: [RouterModule]
})
export class PaymentRoutingModule { }
