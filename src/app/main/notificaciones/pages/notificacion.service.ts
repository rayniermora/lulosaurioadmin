import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor ( private _httpClient: HttpClient ) { }

  listarNotificaciones() {
    return this._httpClient.get( environment.url + 'listarnotificacionpush' );
  }

  crearNotificacion(data:any) {
    return this._httpClient.post( environment.url + 'crearnotificacionpush', data );
  }

  enviarNotificacion(data:any) {
    return this._httpClient.post( environment.url + 'enviarnotificacionpush', data );
  }

  eliminarNotificacion(data:any) {
    return this._httpClient.post( environment.url + 'eliminarnotificacionpush', data );
  }
}
