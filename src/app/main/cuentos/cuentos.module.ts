import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { EditCuentoComponent } from './pages/edit-cuento/edit-cuento.component';

import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    ListCuentosComponent,
    FormCuentosComponent,
    AsignarEtiquetasComponent,
    AsignarCategoriasHijasComponent,
    EditCuentoComponent
  ],
  imports: [
    CommonModule,
    CuentosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
    MainPipeModule,
    CKEditorModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CuentosModule { }
