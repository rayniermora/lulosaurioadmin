import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriasService {

  constructor(private _http: HttpClient) { }

  listSubCategorias() {
    return this._http.get(environment.url + 'listarsubcategorias');
  }
  
  listSubCategoriasxIdioma(idlenguaje:any) {
    return this._http.get(environment.url + 'listarsubcategoriasxidioma/' + idlenguaje);
  }

  listSubCategoria(id:string){
    return this._http.get( environment.url + 'obtenersubcategoria/' + id );
  }

  saveSubCategoria(data:any){
    return this._http.post( environment.url + 'crearsubcategoria', data );
  }

  updateSubCategoria(data:any){
    return this._http.post( environment.url + 'actualizarsubcategoria', data)
  }


}
