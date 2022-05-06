import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormNotificacionComponent } from './pages/form-notificacion/form-notificacion.component';
import { ListNotificacionComponent } from './pages/list-notificacion/list-notificacion.component';

const routes: Routes = [
  {
    path: '',
    component: ListNotificacionComponent
  },
  {
    path: 'form-notificacion',
    component: FormNotificacionComponent
  },
  {
    path: 'list-notificacion',
    component: ListNotificacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacionPushRoutingModule { }
