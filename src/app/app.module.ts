import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { CompaniesBackendComponent } from './companies-backend/companies-backend.component';

import { SingleCompanyBackendComponent } from './single-company-backend/single-company-backend.component';
import { CompaniesBackendService } from './services/companies-backend.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    BackendComponent,
    FrontendComponent,
    CompaniesBackendComponent,
    SingleCompanyBackendComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CompaniesBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
