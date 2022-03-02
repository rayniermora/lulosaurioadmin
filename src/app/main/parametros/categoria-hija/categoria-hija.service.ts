import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaHijaService {

  constructor(private _http: HttpClient) { }

  saveCategoriaHija(data: any) {
    return this._http.post( environment.url + 'crearcategoriahija', data )
  }

  listCategoriasHijas() {
    return this._http.get( environment.url + 'listarCategoriasHijas' )
  }

  listCategoriaHija(idcategoria: string) {
    return this._http.get( environment.url + 'obtenercategoriahija/' + idcategoria )
  }

  updateCategoriaHija(data: any) {
    return this._http.post( environment.url + 'actualizarcategoriahija', data)
  }
}
