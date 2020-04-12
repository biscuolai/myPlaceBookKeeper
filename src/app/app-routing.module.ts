import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordNotFoundComponent } from './shared/components/record-not-found/record-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'verify-email-address', component: VerifyEmailComponent},
  // { path: '', redirectTo: '/payment', pathMatch: 'full' },
  { path: 'record-not-found', component: RecordNotFoundComponent },
  {
    path: 'provider',
    loadChildren: () => import('./components/provider/provider.routing.module').then(m => m.ProviderRoutingModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'payment',
    loadChildren: () => import('./components/payment/payment.routing.module').then(m => m.PaymentRoutingModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'support-budget',
    loadChildren: () => import('./components/support-budget/support-budget.routing.module').then(m => m.SupportBudgetRoutingModule),
    //canActivate: [AuthGuard]
  },

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
