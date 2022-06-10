import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private _http: HttpClient) { }

  saveCategoria(data: any) {
    return this._http.post( environment.url + 'crearcategoria', data )
  }

  listCategorias(id_lenguaje:any) {
    return this._http.get( environment.url + 'listarcategorias/' + id_lenguaje )
  }

  listCategoria(idcategoria: string) {
    return this._http.get( environment.url + 'listarcategoria/' + idcategoria )
  }

  updateCategoria(data: any) {
    return this._http.post( environment.url + 'actualizarcategoria', data)
  }

  eliminarCategoria(data:any){
    return this._http.post( environment.url + 'eliminarcategoria', data)
  }


}
