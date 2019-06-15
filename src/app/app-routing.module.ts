import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesBackendComponent } from './companies-backend/companies-backend.component';
import { SingleCompanyBackendComponent } from './single-company-backend/single-company-backend.component';
import { BackendComponent } from './backend/backend.component';
import { CategoriesBackendComponent } from './categories-backend/categories-backend.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesBackendComponent},
  { path: 'companies', component: CompaniesBackendComponent},
  { path: "companies/:company['id']", component: SingleCompanyBackendComponent},
  { path: 'backend', component: BackendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
