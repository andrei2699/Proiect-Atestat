import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './Manage Tests/test/test.component';
import { AuthGuard } from './Manage Users/auth/auth-guard';
import { LoginComponent } from './Manage Users/login/login.component';
import { DeniedComponent } from './denied/denied.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ElevresultComponent } from './Manage Tests/elevresult/elevresult.component';
import { QuestionComponent } from './Manage Tests/question/question.component';
import { RegisterComponent } from './Manage Users/register/register.component';
import { AdminPageComponent } from './Manage Users/admin-page/admin-page.component';
import { RequestRoleComponent } from './Manage Users/request-role/request-role.component';
import { SettingsComponent } from './Manage Users/settings/settings.component';
import { CreateTestComponent } from './Manage Tests/create-test/create-test.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'denied', component: DeniedComponent },
  {
    path: 'questions/:test',
    component: QuestionComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['elev']
    }
  },
  {
    path: 'result/:id',
    component: ElevresultComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['elev']
    }
  },
  {
    path: 'test/:materie',
    component: TestComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['elev']
    }
  },
  {
    path: 'request-role',
    component: RequestRoleComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['profesor', 'elev']
    }
  },
  {
    path: 'create-test',
    component: CreateTestComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
    data: {
      roles: ['profesor']
    }
  },
  {
    path: 'home',
    component: HomepageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
