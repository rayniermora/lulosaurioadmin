import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoSuscripcionService {

  constructor(private _http: HttpClient) { }

  saveTipoSuscripcion(data: any) {
    return this._http.post( environment.url + 'creartiposuscripcion', data )
  }

  listTiposSuscripciones() {
    return this._http.get( environment.url + 'listartipossuscripcion' )
  }

  listTipoSuscripcion(idetiqueta: string) {
    return this._http.get( environment.url + 'listartiposuscripcion/' + idetiqueta )
  }

  updateTipoSuscripcion(data: any) {
    return this._http.post( environment.url + 'actualizartiposuscripcion', data)
  }
}
