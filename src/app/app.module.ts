import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './Manage Users/auth/auth.service';
import { LoginComponent } from './Manage Users/login/login.component';
import { RegisterComponent } from './Manage Users/register/register.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './Manage Users/auth/auth-guard';
import {
  MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatToolbarModule,
  MatFormFieldModule, MatSnackBarModule, MatMenuModule, MatTableModule, MatCheckboxModule, MatDialogModule,
  MatProgressSpinnerModule, MatSelectModule, MatTabsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DeniedComponent } from './denied/denied.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminPageComponent } from './Manage Users/admin-page/admin-page.component';
import { CdkTableModule } from '@angular/cdk/table';
import { DataGetterService } from './Manage Users/data-getter.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmDialog } from './confirm-dialog/confirm-dialog.component';
import { RequestRoleComponent } from './Manage Users/request-role/request-role.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TestComponent,
    DeniedComponent,
    HomepageComponent,
    AdminPageComponent,
    ConfirmDialog,
    RequestRoleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          console.log('tokenGetter');
          return sessionStorage.getItem('token');
        },
        // ,
        // whitelistedDomains: ['localhost:3001']
      }
    }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatMenuModule,
    CdkTableModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule,
    AppRoutingModule
  ],
  entryComponents: [
    ConfirmDialog
  ],
  providers: [AuthService, AuthGuard, DataGetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
