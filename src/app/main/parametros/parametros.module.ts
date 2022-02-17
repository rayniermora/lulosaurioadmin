import { NgModule } from '@angular/core';
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



@NgModule({
  declarations: [
    ListCategoriasComponent,
    FormCategoriasComponent,
    ListLenguajesComponent,
    FormLenguajesComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
  ]
})
export class ParametrosModule { }
