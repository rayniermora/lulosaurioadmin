
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import( './dashboard/dashboard.module' ).then(m => m.DashboardModule)
      },
      {
        path: 'parametros',
        loadChildren: () => import( './parametros/parametros.module').then( m => m.ParametrosModule )
      },
      {
        path: 'cuentos',
        loadChildren: () => import( './cuentos/cuentos.module').then( m => m.CuentosModule )
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
