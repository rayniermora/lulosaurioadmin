import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListarCategoriasComponent } from './componentes/listar-categorias/listar-categorias.component';

@NgModule({
  declarations: [
    ListarCategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    SharedModule,
  ]
})
export class CategoriasModule { }
