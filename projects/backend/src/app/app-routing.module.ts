import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesBackendComponent } from './companies-backend/companies-backend.component';
import { SingleCompanyBackendComponent } from './single-company-backend/single-company-backend.component';
import { PremiumsBackendComponent } from './premiums-backend/premiums-backend.component';
import { SinglePremiumBackendComponent } from './single-premium-backend/single-premium-backend.component';
import { SubCategoriesBackendComponent } from './sub-categories-backend/sub-categories-backend.component';
import { SingleSubCategoryBackendComponent } from './single-sub-category-backend/single-sub-category-backend.component';
import { UsersBackendComponent } from './users-backend/users-backend.component';
import { SingleUserBackendComponent } from './single-user-backend/single-user-backend.component';
import { PromotionsBackendComponent } from './promotions-backend/promotions-backend.component';
import { SinglePromotionsBackendComponent } from './single-promotions-backend/single-promotions-backend.component';
import { ProductsBackendComponent } from './products-backend/products-backend.component';
import { SingleProductsBackendComponent } from './single-products-backend/single-products-backend.component';
import { CategoriesBackendComponent } from './categories-backend/categories-backend.component';
import { SingleCategoryBackendComponent } from './single-category-backend/single-category-backend.component';

const routes: Routes = [
  { path: 'backend/companies', component: CompaniesBackendComponent},
  { path: "detail-company/:id", component: SingleCompanyBackendComponent},
  { path: 'backend/premiums', component: PremiumsBackendComponent},
  { path: "detail-premium/:id", component: SinglePremiumBackendComponent},
  { path: 'backend/subcategories', component: SubCategoriesBackendComponent},
  { path: "detail-subcategory/:id", component: SingleSubCategoryBackendComponent},
  { path: "backend/users", component: UsersBackendComponent},
  { path: "detail-user/:id", component: SingleUserBackendComponent},
  { path: "backend/promotions", component: PromotionsBackendComponent},
  { path: "detail-promotion/:id", component: SinglePromotionsBackendComponent},
  { path: "backend/products", component: ProductsBackendComponent},
  { path: "detail-product/:id", component: SingleProductsBackendComponent},
  { path: "backend/categories", component: CategoriesBackendComponent},
  { path: "detail-category/:id", component: SingleCategoryBackendComponent},
  { path: 'backend', redirectTo: 'backend/companies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
