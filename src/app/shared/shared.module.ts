import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponent } from './layouts/nav/nav.component';
import { NavTopComponent } from './layouts/nav-top/nav-top.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FooterComponent, NavComponent,NavTopComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent,NavComponent,NavTopComponent]
})
export class SharedModule { }
