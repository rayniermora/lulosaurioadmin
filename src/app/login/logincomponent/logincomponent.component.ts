import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  constructor(private router: Router, private _login: LoginService) { }

  ngOnInit(): void {
  }
  entrar(formu: NgForm){

    if (formu.valid) {
      this._login.login(formu.value).subscribe(
        (res:any) => {
          if(res.user.datos.rol === 'admin'){
            localStorage.setItem('_tokenbonding',res.access_token);
            localStorage.setItem('_userbonding',JSON.stringify(res.user));
            let hoy= new Date();
            hoy.setSeconds( 10800 );
            localStorage.setItem('expira',hoy.getTime().toString());
            this.router.navigate(['gustos/listcategorias']);
          }else{
            // Swal.fire({
            //   icon: 'error',
            //   title: 'Oops...',
            //   text: 'No eres un Administrador !',
            // })


          }
        },
        (error)=>{
          console.log(error);
          if (error.status == 401) {
            console.log(error);

          }

        }
      );
    }
  }

}
