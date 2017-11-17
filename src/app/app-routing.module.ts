import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './auth/auth-guard';
import { LoginComponent } from './login/login.component';
import { DeniedComponent } from './denied/denied.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'denied', component: DeniedComponent },
  { path: 'home', component: HomepageComponent },
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