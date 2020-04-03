import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderFormComponent } from './components/provider-form/provider-form.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
// import { AuthGuard } from './guards/auth.guard';
// import { TasksGuard } from './guards/tasks.guard';
// import { SignInComponent } from './auth/sign-in/sign-in.component';
// import { SignUpComponent } from './auth/sign-up/sign-up.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    // { path: 'tasks',
    //     loadChildren: './tasks/tasks.module#TasksModule',
    //     canActivate: [AuthGuard],
    //     canActivateChild: [TasksGuard],
    //     canLoad: [AuthGuard]
    // },
    // { path: 'signin', component: SignInComponent },
    // { path: 'signup', component: SignUpComponent },
    { path: 'provider', component: ProviderFormComponent },
    { path: 'policy', component: PolicyListComponent },
    // { path: 'home',
    //     component: HomeComponent,
    //     canActivate: [AuthGuard]
    // },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
