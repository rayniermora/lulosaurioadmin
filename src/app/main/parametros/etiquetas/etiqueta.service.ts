import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {

  constructor(private _http: HttpClient) { }

  saveEtiqueta(data: any) {
    return this._http.post( environment.url + 'saveetiqueta', data )
  }

  listEtiquetas() {
    return this._http.get( environment.url + 'listetiquetas' )
  }

  listEtiquetasxIdioma(idlenguaje:any) {
    return this._http.get( environment.url + 'listetiquetasxidioma/' + idlenguaje )
  }

  listEtiqueta(idetiqueta: string) {
    return this._http.get( environment.url + 'listetiqueta/' + idetiqueta )
  }

  updateEtiqueta(data: any) {
    return this._http.post( environment.url + 'editetiquetas', data)
  }

  eliminarEtiqueta(data: any) {
    return this._http.post( environment.url + 'eliminaretiqueta', data)
  }

}
