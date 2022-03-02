import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainRoutingModule } from './main-routing.module';
import { ParametrosComponent } from './parametros/parametros.component';
import { CuentosComponent } from './cuentos/cuentos.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ParametrosComponent,
    CuentosComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
