import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSuscriptorComponent } from './pages/form-suscriptor/form-suscriptor.component';
import { ListSuscriptoresComponent } from './pages/list-suscriptores/list-suscriptores.component';

const routes: Routes = [
  {
    path: '',
    component: ListSuscriptoresComponent
  },
  {
    path: 'form-suscriptor',
    component: FormSuscriptorComponent
  },
  {
    path: 'list-suscriptores',
    component: ListSuscriptoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuscriptoresRoutingModule { }
