import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuentosService {

  constructor(private _http: HttpClient) {}

  listCuentos() {
    return this._http.get( environment.url + 'listarcuentos/1' );
  }

  listCuento(id:string) {
    return this._http.get( environment.url + 'listarcuento/' + id );
  }

  listCuentoxIdioma(id_cuento:string) {
    return this._http.get( environment.url + 'listarcuentosdiferenteidioma/' + id_cuento );
  }

  saveCuento(data:any) {
    return this._http.post( environment.url + 'crearcuento' , data);
  }


  listSubCategorias(id_lenguaje:any) {
    return this._http.get( environment.url + 'listarsubcategorias/' + id_lenguaje)
  }

  listTipoContenido(id_lenguaje:any) {
    return this._http.get( environment.url + 'listartipocontenido/' + id_lenguaje)
  }

  listCategoriasHijas() {
    return this._http.get( environment.url + 'listarCategoriasHijas')
  }


}
