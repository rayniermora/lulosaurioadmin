import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  constructor(private _http: HttpClient) { }

  listLenguajes() {
    return this._http.get(environment.url + 'listlenguajes');
  }

  listLenguaje(id:string){
    return this._http.get( environment.url + 'listlenguaje/' + id );
  }

  saveLenguaje(data:any){
    return this._http.post( environment.url + 'listlenguaje', data );
  }

  updateLenguaje(data:any){
    return this._http.post( environment.url + 'editlenguajes', data)
  }


}
