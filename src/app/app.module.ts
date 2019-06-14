import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { CompaniesBackendComponent } from './companies-backend/companies-backend.component';
import { CompaniesBackendService } from './companies-backend/companies-backend.service';



@NgModule({
  declarations: [
    AppComponent,
    BackendComponent,
    FrontendComponent,
    CompaniesBackendComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CompaniesBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
