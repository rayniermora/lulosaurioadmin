import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuscriptoresRoutingModule } from './suscriptores-routing.module';
import { MainPipeModule } from 'src/app/pipes/mainPipe.module';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { ListSuscriptoresComponent } from './pages/list-suscriptores/list-suscriptores.component';
import { FormSuscriptorComponent } from './pages/form-suscriptor/form-suscriptor.component';

import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    ListSuscriptoresComponent,
    FormSuscriptorComponent
  ],
  imports: [
    CommonModule,
    SuscriptoresRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
    MainPipeModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SuscriptoresModule { }
