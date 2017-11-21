import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './auth/auth-guard';
import { LoginComponent } from './login/login.component';
import { DeniedComponent } from './denied/denied.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { InformaticaComponent } from './informatica/informatica.component';


const routes: Routes = [
  {
    path: '', component: HomepageComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'informatica',component: InformaticaComponent},
  { path: 'denied', component: DeniedComponent },
  {
    path: 'home',
    component: HomepageComponent,
    canActivate: [AuthGuard],
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
