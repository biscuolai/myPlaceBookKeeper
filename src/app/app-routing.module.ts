import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordNotFoundComponent } from './shared/components/record-not-found/record-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/payment', pathMatch: 'full' },
  { path: 'record-not-found', component: RecordNotFoundComponent },
  {
    path: 'provider',
    loadChildren: () => import('./components/provider/provider.routing.module').then(m => m.ProviderRoutingModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./components/payment/payment.routing.module').then(m => m.PaymentRoutingModule)
  },
  {
    path: 'support-budget',
    loadChildren: () => import('./components/support-budget/support-budget.routing.module').then(m => m.SupportBudgetRoutingModule)
  },

  // { path: 'provider',
  //     loadChildren: './components/provider/provider.routing.module#ProviderRoutingModule',
  //     // canActivate: [AuthGuard],
  //     // canActivateChild: [TasksGuard],
  //     // canLoad: [AuthGuard]
  // },
  { path: '**', component: RecordNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
