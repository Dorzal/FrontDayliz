import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CompaniesBackendComponent } from './Company/companies-backend/companies-backend.component';

import { SingleCompanyBackendComponent } from './Company/single-company-backend/single-company-backend.component';
import { CompaniesBackendService } from './services/companies-backend.service';
import { FormsModule } from '@angular/forms';
import { PremiumsBackendService } from './services/premiums-backend.service';
import { PremiumsBackendComponent } from './Premium/premiums-backend/premiums-backend.component';
import { SinglePremiumBackendComponent } from './Premium/single-premium-backend/single-premium-backend.component';
import { SubCategoriesBackendComponent } from './SubCategory/sub-categories-backend/sub-categories-backend.component';
import { SubCategoriesBackendService } from './services/sub-categories-backend.service';
import { SingleSubCategoryBackendComponent } from './SubCategory/single-sub-category-backend/single-sub-category-backend.component';
import { UsersBackendService } from './services/users-backend.service';
import { UsersBackendComponent } from './User/users-backend/users-backend.component';
import { SingleUserBackendComponent } from './User/single-user-backend/single-user-backend.component';
import { PromotionsBackendService } from './services/promotions-backend.service';
import { PromotionsBackendComponent } from './Promotion/promotions-backend/promotions-backend.component';
import { SinglePromotionsBackendComponent } from './Promotion/single-promotions-backend/single-promotions-backend.component';
import { ProductsBackendComponent } from './Product/products-backend/products-backend.component';
import { SingleProductsBackendComponent } from './Product/single-products-backend/single-products-backend.component';
import { ProductsBackendService } from './services/products-backend.service';
import { CategoriesBackendComponent } from './Category/categories-backend/categories-backend.component';
import { CategoriesBackendService } from './services/categories-backend.service';
import { SingleCategoryBackendComponent } from './Category/single-category-backend/single-category-backend.component';
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
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
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
