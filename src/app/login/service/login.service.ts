import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userToken!: any;

  constructor(public _http: HttpClient) {

  }
  register(data: any) {
    return this._http.post( environment.url + 'register', data )
  }

  login(data: any){
    return this._http.post( environment.url + 'login' ,data);
  }

  obtenertoken(){
    if(localStorage.getItem('_tokenfide')){
      this.userToken=localStorage.getItem('_tokenfide');
    }else{
      this.userToken='';
    }
  }

  estaAutenticado():boolean{
    const expira = Number(localStorage.getItem('expira'));
    const expiraToken = new Date();
    expiraToken.setTime(expira);
    if(new Date() > expiraToken){
      localStorage.removeItem('_tokenfide');
      localStorage.removeItem('expira');
      localStorage.removeItem('_userfide');
      return false;
    }else{
      console.log("no expiro");
      return true;
    };

  }

  logout(){
    localStorage.removeItem('_tokenfide');
    localStorage.removeItem('expira');
    localStorage.removeItem('_userfide');
  }
}
