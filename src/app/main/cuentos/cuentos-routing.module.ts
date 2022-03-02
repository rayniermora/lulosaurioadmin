import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCuentosComponent } from './pages/form-cuentos/form-cuentos.component';
import { ListCuentosComponent } from './pages/list-cuentos/list-cuentos.component';

const routes: Routes = [
  {
    path: '',
    component: ListCuentosComponent
  },
  {
    path: 'list-cuentos',
    component: ListCuentosComponent
  },
  {
    path: 'form-cuento',
    component: FormCuentosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentosRoutingModule { }
