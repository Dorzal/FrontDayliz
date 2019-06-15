import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesBackendComponent } from './companies-backend/companies-backend.component';
import { SingleCompanyBackendComponent } from './single-company-backend/single-company-backend.component';
import { BackendComponent } from './backend/backend.component';

const routes: Routes = [
  { path: 'companies', component: CompaniesBackendComponent},
  { path: "detail-company/:id", component: SingleCompanyBackendComponent},
  { path: 'backend', component: BackendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
