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
import { PremiumsBackendService } from './services/premiums-backend.service';
import { PremiumsBackendComponent } from './premiums-backend/premiums-backend.component';
import { SinglePremiumBackendComponent } from './single-premium-backend/single-premium-backend.component';
import { SubCategoriesBackendComponent } from './sub-categories-backend/sub-categories-backend.component';
import { SubCategoriesBackendService } from './services/sub-categories-backend.service';
import { SingleSubCategoryBackendComponent } from './single-sub-category-backend/single-sub-category-backend.component';



@NgModule({
  declarations: [
    AppComponent,
    BackendComponent,
    FrontendComponent,
    CompaniesBackendComponent,
    SingleCompanyBackendComponent,
    PremiumsBackendComponent,
    SinglePremiumBackendComponent,
    SubCategoriesBackendComponent,
    SingleSubCategoryBackendComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CompaniesBackendService,
    PremiumsBackendService,
    SubCategoriesBackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
