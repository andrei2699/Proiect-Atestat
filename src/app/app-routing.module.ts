import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './Manage Tests/test/test.component';
import { AuthGuard } from './Manage Users/auth/auth-guard';
import { LoginComponent } from './Manage Users/login/login.component';
import { DeniedComponent } from './denied/denied.component';
import { HomepageComponent } from './Homepages/homepage/homepage.component';
import { ElevresultComponent } from './Manage Tests/elevresult/elevresult.component';
import { QuestionComponent } from './Manage Tests/question/question.component';
import { RegisterComponent } from './Manage Users/register/register.component';
import { AdminPageComponent } from './Manage Users/admin-page/admin-page.component';
import { RequestRoleComponent } from './Manage Users/request-role/request-role.component';
import { SettingsComponent } from './Manage Users/settings/settings.component';
import { CreateTestComponent } from './Manage Tests/create-test/create-test.component';
import { NoteComponent } from './Manage Tests/note/note.component';
import { NoteprofComponent } from './Manage Tests/noteprof/noteprof.component';
import { GiveTestComponent } from './Manage Tests/give-test/give-test.component';
import { PreviewTestComponent } from './Manage Tests/preview-test/preview-test.component';


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
    path: 'questions/:id',
    component: QuestionComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['elev']
    }
  },
  {
    path: 'result/:idtest/:id',
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
    path: 'note/:materie',
    component: NoteComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['elev']
    }
  },
  {
    path: 'noteprof/:materie',
    component: NoteprofComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['profesor']
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
    path: 'give-test',
    component: GiveTestComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['profesor']
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
    path: 'create-test/:nume/:materie',
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
