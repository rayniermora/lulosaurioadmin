import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private _http: HttpClient) { }

  listUsuarios() {
    return this._http.get(environment.url + 'listarusuariossistema');
  }

  listUsuario(id:string){
    return this._http.get( environment.url + 'listarusuario/' + id );
  }

  saveUsuario(data:any){
    return this._http.post( environment.url + 'register', data );
  }

  updateUsuario(data:any){
    return this._http.post( environment.url + 'actualizarusuario', data)
  }

  listUsuariosSuscriptores() {
    return this._http.get(environment.url + 'listarusuariossuscriptores');
  }

  buscarSuscriptores(query:any){
    return this._http.get(environment.url + 'buscarsuscriptores/' + query);
  }
}
