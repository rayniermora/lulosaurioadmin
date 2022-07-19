import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { NgxSpinnerModule } from 'ngx-spinner';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
