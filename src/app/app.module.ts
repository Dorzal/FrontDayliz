import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BackendModule } from '../../projects/backend/src/app/app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor} from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { InterestComponent } from './interest/interest.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent,
    InterestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BackendModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
