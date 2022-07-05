import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPerfilComponent } from './pages/form-perfil/form-perfil.component';

const routes: Routes = [
  {
    path: '',
    component: FormPerfilComponent
  },
  {
    path: 'form-perfil',
    component: FormPerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
