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
import { SingleCategoryBackendComponent } from './single-category-backend/single-category-backend.component';
import { CategoriesBackendComponent } from './categories-backend/categories-backend.component';
import { CategoriesBackendService } from './services/categories-backend.service';



@NgModule({
  declarations: [
    AppComponent,
    BackendComponent,
    FrontendComponent,
    CompaniesBackendComponent,
    SingleCompanyBackendComponent,
    SingleCategoryBackendComponent,
    CategoriesBackendComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CompaniesBackendService, CategoriesBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
