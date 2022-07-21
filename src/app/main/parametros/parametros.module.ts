import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametrosRoutingModule } from './parametros-routing.module';
import { ListCategoriasComponent } from './categorias/pages/list-categorias/list-categorias.component';
import { FormCategoriasComponent } from './categorias/pages/form-categorias/form-categorias.component';
import { ListLenguajesComponent } from './lenguajes/pages/list-lenguajes/list-lenguajes.component';
import { FormLenguajesComponent } from './lenguajes/pages/form-lenguajes/form-lenguajes.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCategoriaHijaComponent } from './categoria-hija/pages/list-categoria-hija/list-categoria-hija.component';
import { FormCategoriaHijaComponent } from './categoria-hija/pages/form-categoria-hija/form-categoria-hija.component';
import { FormEtiquetaComponent } from './etiquetas/pages/form-etiqueta/form-etiqueta.component';
import { ListEtiquetaComponent } from './etiquetas/pages/list-etiqueta/list-etiqueta.component';
import { FormSubCategoriaComponent } from './sub-categoria/form-sub-categoria/form-sub-categoria.component';
import { ListSubCategoriasComponent } from './sub-categoria/list-sub-categorias/list-sub-categorias.component';
import { FormRolComponent } from './roles/pages/form-rol/form-rol.component';
import { ListRolesComponent } from './roles/pages/list-roles/list-roles.component';
import { FormTipoContenidoComponent } from './tipo-contenido/pages/form-tipo-contenido/form-tipo-contenido.component';
import { ListTiposContenidosComponent } from './tipo-contenido/pages/list-tipos-contenidos/list-tipos-contenidos.component';
import { FormUsuarioComponent } from './usuarios/pages/form-usuario/form-usuario.component';
import { ListUsuariosComponent } from './usuarios/pages/list-usuarios/list-usuarios.component';
import { ListTipoSuscripcionComponent } from './tipo-suscripcion/pages/list-tipo-suscripcion/list-tipo-suscripcion.component';
import { FormTipoSuscripcionComponent } from './tipo-suscripcion/pages/form-tipo-suscripcion/form-tipo-suscripcion.component';

import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    ListCategoriasComponent,
    FormCategoriasComponent,
    ListLenguajesComponent,
    FormLenguajesComponent,
    ListCategoriaHijaComponent,
    FormCategoriaHijaComponent,
    FormEtiquetaComponent,
    ListEtiquetaComponent,
    FormSubCategoriaComponent,
    ListSubCategoriasComponent,
    ListRolesComponent,
    FormRolComponent,
    FormTipoContenidoComponent,
    ListTiposContenidosComponent,
    FormUsuarioComponent,
    ListUsuariosComponent,
    ListTipoSuscripcionComponent,
    FormTipoSuscripcionComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ParametrosModule { }
