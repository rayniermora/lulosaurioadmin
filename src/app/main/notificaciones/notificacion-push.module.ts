import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificacionPushRoutingModule } from './notificacion-push-routing.module';
import { FormNotificacionComponent } from './pages/form-notificacion/form-notificacion.component';
import { ListNotificacionComponent } from './pages/list-notificacion/list-notificacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    FormNotificacionComponent,
    ListNotificacionComponent
  ],
  imports: [
    CommonModule,
    NotificacionPushRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotificacionPushModule { }
