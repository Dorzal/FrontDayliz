import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendModule } from '../../projects/backend/src/app/app.module';

const routes: Routes = [
  {
    path: 'backend',
    loadChildren: '../../projects/backend/src/app/app.module#BackendModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BackendModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
