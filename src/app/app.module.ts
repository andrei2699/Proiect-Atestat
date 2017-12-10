import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './Manage Users/auth/auth.service';
import { LoginComponent } from './Manage Users/login/login.component';
import { RegisterComponent } from './Manage Users/register/register.component';
import { TestComponent } from './Manage Tests/test/test.component';
import { AuthGuard } from './Manage Users/auth/auth-guard';
import {
  MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatToolbarModule,
  MatFormFieldModule, MatSnackBarModule, MatMenuModule, MatTableModule, MatCheckboxModule, MatDialogModule,
  MatProgressSpinnerModule, MatSelectModule, MatTabsModule, MatListModule, MatExpansionModule, MatGridListModule, MatButtonToggleModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DeniedComponent } from './denied/denied.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminPageComponent } from './Manage Users/admin-page/admin-page.component';
import { CdkTableModule } from '@angular/cdk/table';
import { DataGetterService } from './Manage Users/data-getter.service';
import { TestsService } from './Manage Tests/tests.service';
import { QuestionComponent } from './Manage Tests/question/question.component';
import { ElevresultComponent } from './Manage Tests/elevresult/elevresult.component';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmDialog } from './confirm-dialog/confirm-dialog.component';
import { RequestRoleComponent } from './Manage Users/request-role/request-role.component';
import { SettingsComponent } from './Manage Users/settings/settings.component';
import { SubjectLineComponent } from './Manage Tests/subject-line/subject-line.component';
import { ElevHomeComponent } from './elev-home/elev-home.component';
import { CreateTestComponent } from './Manage Tests/create-test/create-test.component';

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
    SettingsComponent,
    QuestionComponent,
    ElevresultComponent,
    RequestRoleComponent,
    SubjectLineComponent,
    ElevHomeComponent,
    CreateTestComponent,
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
    MatExpansionModule,
    AppRoutingModule,
    MatRadioModule,
    MatListModule,
    MatGridListModule,
    MatButtonToggleModule,
    AppRoutingModule
  ],
  entryComponents: [
    ConfirmDialog
  ],
  providers: [AuthService, AuthGuard, DataGetterService, TestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
