import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { ProviderFormComponent } from './components/provider-form/provider-form.component';
import { ProviderListComponent } from './components/provider-list/provider-list.component';
import { RecordNotFoundComponent } from './components/record-not-found/record-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student', component: StudentComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'student-not-found', component: RecordNotFoundComponent },
  { path: 'provider', component: ProviderFormComponent },
  { path: 'provider/:id', component: ProviderFormComponent },
  { path: 'provider-list', component: ProviderListComponent },
  { path: '**', component: RecordNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
