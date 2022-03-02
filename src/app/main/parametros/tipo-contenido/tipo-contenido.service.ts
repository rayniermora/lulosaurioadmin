import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoContenidoService {

  constructor(private _http: HttpClient) { }

  listTiposContenidos() {
    return this._http.get(environment.url + 'listartipocontenido');
  }

  listTipoContenido(id:string){
    return this._http.get( environment.url + 'listartipocontenido/' + id );
  }

  saveTipoContenido(data:any){
    return this._http.post( environment.url + 'creartipocontenido', data );
  }

  updateTipoContenido(data:any){
    return this._http.post( environment.url + 'actualizartipocontenido', data)
  }
}
