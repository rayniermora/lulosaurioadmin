import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentosRoutingModule } from './cuentos-routing.module';
import { ListCuentosComponent } from './pages/list-cuentos/list-cuentos.component';
import { FormCuentosComponent } from './pages/form-cuentos/form-cuentos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { MainPipeModule } from '../../pipes/mainPipe.module';
import { AsignarEtiquetasComponent } from './pages/asignar-etiquetas/asignar-etiquetas.component';
import { AsignarCategoriasHijasComponent } from './pages/asignar-categorias-hijas/asignar-categorias-hijas.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    ListCuentosComponent,
    FormCuentosComponent,
    AsignarEtiquetasComponent,
    AsignarCategoriasHijasComponent
  ],
  imports: [
    CommonModule,
    CuentosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
    MainPipeModule,
    CKEditorModule
  ]
})
export class CuentosModule { }
