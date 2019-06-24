import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendModule } from '../../projects/backend/src/app/app.module';
import { AuthGuard } from './guards';
import { LoginComponent } from './login/login.component';
import { CompaniesBackendComponent } from 'projects/backend/src/app/Company/companies-backend/companies-backend.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'backend', canActivateChild: [AuthGuard],
    loadChildren: '../../projects/backend/src/app/app.module#BackendModule'
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BackendModule.forRoot(),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
