import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { UsersBackendService } from './services/users-backend.service';
import { UsersBackendComponent } from './users-backend/users-backend.component';
import { SingleUserBackendComponent } from './single-user-backend/single-user-backend.component';
import { PromotionsBackendService } from './services/promotions-backend.service';
import { PromotionsBackendComponent } from './promotions-backend/promotions-backend.component';
import { SinglePromotionsBackendComponent } from './single-promotions-backend/single-promotions-backend.component';
import { ProductsBackendComponent } from './products-backend/products-backend.component';
import { SingleProductsBackendComponent } from './single-products-backend/single-products-backend.component';
import { ProductsBackendService } from './services/products-backend.service';
import { CategoriesBackendComponent } from './categories-backend/categories-backend.component';
import { CategoriesBackendService } from './services/categories-backend.service';
import { SingleCategoryBackendComponent } from './single-category-backend/single-category-backend.component';
import { NavComponent } from './nav/nav.component';

const providers = [
  CompaniesBackendService,
  PremiumsBackendService,
  SubCategoriesBackendService,
  UsersBackendService,
  PromotionsBackendService,
  ProductsBackendService,
  CategoriesBackendService
];


@NgModule({
  declarations: [
    AppComponent,
    CompaniesBackendComponent,
    SingleCompanyBackendComponent,
    PremiumsBackendComponent,
    SinglePremiumBackendComponent,
    SubCategoriesBackendComponent,
    SingleSubCategoryBackendComponent,
    UsersBackendComponent,
    SingleUserBackendComponent,
    PromotionsBackendComponent,
    SinglePromotionsBackendComponent,
    ProductsBackendComponent,
    SingleProductsBackendComponent,
    CategoriesBackendComponent,
    SingleCategoryBackendComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule { }


@NgModule({})
export class BackendModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers
    };
  }
}
