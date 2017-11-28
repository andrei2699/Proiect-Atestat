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
  MatProgressSpinnerModule, MatSelectModule, MatTabsModule, MatListModule, MatExpansionModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DeniedComponent } from './denied/denied.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminPageComponent } from './Manage Users/admin-page/admin-page.component';
import { CdkTableModule } from '@angular/cdk/table';
import { DataService } from './data.service';
import { TestsService } from './tests.service';
import { InformaticaComponent } from './informatica/informatica.component';
import { QuestionComponent } from './question/question.component';
import { ElevresultComponent } from './elevresult/elevresult.component';
import { SubjectComponent } from './subject/subject.component';
import { MatRadioModule } from '@angular/material/radio';
import { DataGetterService } from './Manage Users/data-getter.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmDialog } from './confirm-dialog/confirm-dialog.component';
import { RequestRoleComponent } from './Manage Users/request-role/request-role.component';
import { SettingsComponent } from './Manage Users/settings/settings.component';

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
    InformaticaComponent,
    ElevresultComponent,
    SubjectComponent,
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
    MatExpansionModule,
    AppRoutingModule,
    MatRadioModule,
    MatListModule,
    AppRoutingModule
  ],
  entryComponents: [
    ConfirmDialog
  ],
  providers: [AuthService, AuthGuard, DataGetterService, DataService, TestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }