import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentosRoutingModule } from './cuentos-routing.module';
import { ListCuentosComponent } from './pages/list-cuentos/list-cuentos.component';
import { FormCuentosComponent } from './pages/form-cuentos/form-cuentos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { MainPipeModule } from '../../pipes/mainPipe.module';


@NgModule({
  declarations: [
    ListCuentosComponent,
    FormCuentosComponent
  ],
  imports: [
    CommonModule,
    CuentosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
    MainPipeModule
  ]
})
export class CuentosModule { }
