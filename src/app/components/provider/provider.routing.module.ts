import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderFormComponent } from './provider-form/provider-form.component';
import { RecordNotFoundComponent } from './../../shared/components/record-not-found/record-not-found.component';

const providerRoutes: Routes = [
  { path: '', component: ProviderFormComponent},
  { path: ':id', component: ProviderFormComponent },
  { path: 'list', component: ProviderListComponent },
  { path: 'notfound', component: RecordNotFoundComponent }
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
    imports: [RouterModule.forChild(providerRoutes)],
    exports: [RouterModule]
})
export class ProviderRoutingModule { }
