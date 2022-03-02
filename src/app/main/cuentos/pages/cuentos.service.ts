import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuentosService {

  constructor(private _http: HttpClient) {}

  listCuentos() {
    return this._http.get( environment.url + 'listarcuentos' );
  }

  listCuento(id:string) {
    return this._http.get( environment.url + 'listarcuento/' + id );
  }

  saveCuento(data:any) {
    return this._http.post( environment.url + 'crearcuento' , data);
  }


  listSubCategorias() {
    return this._http.get( environment.url + 'listarsubcategorias')
  }

  listTipoContenido() {
    return this._http.get( environment.url + 'listartipocontenido')
  }

  listCategoriasHijas() {
    return this._http.get( environment.url + 'listarCategoriasHijas')
  }


}
