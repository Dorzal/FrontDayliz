import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendModule } from '../../projects/backend/src/app/app.module';
import { AuthGuard } from './guards';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { InterestComponent } from './interest/interest.component';
import { DisplayComponent } from './display/display.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'backend', canActivateChild: [AuthGuard],
    loadChildren: '../../projects/backend/src/app/app.module#BackendModule'
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'interest', component: InterestComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'profil', component: ProfilComponent},
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
