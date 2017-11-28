import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './Manage Users/auth/auth-guard';
import { LoginComponent } from './Manage Users/login/login.component';
import { DeniedComponent } from './denied/denied.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InformaticaComponent } from './informatica/informatica.component';
import { ElevresultComponent } from './elevresult/elevresult.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './Manage Users/register/register.component';
import { AdminPageComponent } from './Manage Users/admin-page/admin-page.component';
import { RequestRoleComponent } from './Manage Users/request-role/request-role.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'Informatica',component: InformaticaComponent},
  { path: 'result',component: ElevresultComponent},
  { path: 'denied', component: DeniedComponent },
  { path: 'questions', component: QuestionComponent },
  {
    path: 'request-role',
    component: RequestRoleComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['profesor', 'elev']
    }
  },
  {
    path: 'home',
    component: HomepageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-page',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'elev']
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
