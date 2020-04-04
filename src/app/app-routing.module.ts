import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './components/students/student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentNotFoundComponent } from './components/student-not-found/student-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student', component: StudentComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'student-not-found', component: StudentNotFoundComponent },
  { path: '**', component: StudentNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
