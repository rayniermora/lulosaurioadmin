import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private _http: HttpClient) { }

  saveRol(data: any) {
    return this._http.post( environment.url + 'crearrol', data )
  }

  listRoles() {
    return this._http.get( environment.url + 'listroles' )
  }

  listRol(idrol: string) {
    return this._http.get( environment.url + 'listrol/' + idrol )
  }

  updateRol(data: any) {
    return this._http.post( environment.url + 'actualizarrol', data)
  }

}
