import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import Swal from 'sweetalert2';

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
          if(res.user.datos.rol === 'ADMIN'){
            localStorage.setItem('_tokenlulo',res.access_token);
            localStorage.setItem('_userlulo',JSON.stringify(res.user));
            let hoy= new Date();
            hoy.setSeconds( 10800 );
            localStorage.setItem('expira',hoy.getTime().toString());
            this.router.navigate(['main/dashboard']);
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No eres un Administrador !',
            })


          }
        },
        (error)=>{
          console.log(error);
          if (error.status == 401) {
            console.log(error);

          }
          if (error.status == 422) {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No eres un Administrador !',
            })
          }


        }
      );
    }
  }

}
