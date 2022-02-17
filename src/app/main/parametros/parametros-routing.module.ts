import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCategoriasComponent } from './categorias/pages/form-categorias/form-categorias.component';
import { ListCategoriasComponent } from './categorias/pages/list-categorias/list-categorias.component';
import { ListLenguajesComponent } from './lenguajes/pages/list-lenguajes/list-lenguajes.component';

const routes: Routes = [

  {
    path: 'list-categorias',
    component: ListCategoriasComponent
  },
  {
    path: 'form-categoria',
    component: FormCategoriasComponent
  },
  {
    path: 'list-lenguajes',
    component: ListLenguajesComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
