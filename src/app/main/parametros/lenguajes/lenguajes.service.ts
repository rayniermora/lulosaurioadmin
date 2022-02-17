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


}
