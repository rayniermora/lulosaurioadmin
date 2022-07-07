import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { FormPerfilComponent } from './pages/form-perfil/form-perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormPerfilComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PerfilModule { }
