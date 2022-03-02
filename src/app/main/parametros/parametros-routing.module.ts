import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCategoriaHijaComponent } from './categoria-hija/pages/form-categoria-hija/form-categoria-hija.component';
import { ListCategoriaHijaComponent } from './categoria-hija/pages/list-categoria-hija/list-categoria-hija.component';
import { FormCategoriasComponent } from './categorias/pages/form-categorias/form-categorias.component';
import { ListCategoriasComponent } from './categorias/pages/list-categorias/list-categorias.component';
import { FormEtiquetaComponent } from './etiquetas/pages/form-etiqueta/form-etiqueta.component';
import { ListEtiquetaComponent } from './etiquetas/pages/list-etiqueta/list-etiqueta.component';
import { FormLenguajesComponent } from './lenguajes/pages/form-lenguajes/form-lenguajes.component';
import { ListLenguajesComponent } from './lenguajes/pages/list-lenguajes/list-lenguajes.component';
import { FormRolComponent } from './roles/pages/form-rol/form-rol.component';
import { ListRolesComponent } from './roles/pages/list-roles/list-roles.component';
import { FormSubCategoriaComponent } from './sub-categoria/form-sub-categoria/form-sub-categoria.component';
import { ListSubCategoriasComponent } from './sub-categoria/list-sub-categorias/list-sub-categorias.component';
import { FormTipoContenidoComponent } from './tipo-contenido/pages/form-tipo-contenido/form-tipo-contenido.component';
import { ListTiposContenidosComponent } from './tipo-contenido/pages/list-tipos-contenidos/list-tipos-contenidos.component';

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
  },
  {
    path: 'form-lenguajes',
    component: FormLenguajesComponent
  },
  {
    path: 'list-categoria-hija',
    component: ListCategoriaHijaComponent
  },
  {
    path: 'form-categoria-hija',
    component: FormCategoriaHijaComponent
  },
  {
    path: 'list-etiquetas',
    component: ListEtiquetaComponent
  },
  {
    path: 'form-etiqueta',
    component: FormEtiquetaComponent
  },
  {
    path: 'list-sub-categorias',
    component: ListSubCategoriasComponent
  },
  {
    path: 'form-sub-categoria',
    component: FormSubCategoriaComponent
  },
  {
    path: 'list-roles',
    component: ListRolesComponent
  },
  {
    path: 'form-rol',
    component: FormRolComponent
  },
  {
    path: 'form-tipo-contenido',
    component: FormTipoContenidoComponent
  },
  {
    path: 'list-tipos-contenidos',
    component: ListTiposContenidosComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
