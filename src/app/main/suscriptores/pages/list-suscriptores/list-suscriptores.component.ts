import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/main/parametros/usuarios/usuarios.service';

@Component({
  selector: 'app-list-suscriptores',
  templateUrl: './list-suscriptores.component.html',
  styleUrls: ['./list-suscriptores.component.css']
})
export class ListSuscriptoresComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private router: Router, private usuarioSvc: UsuariosService) { }

  ngOnInit() {
    this.listarUsuarios()

  }

  listarUsuarios() {
    this.usuarioSvc.listUsuariosSuscriptores().subscribe(
      (res: any) => {
        this.usuarios = res;
      }
    );
  }

  updateUsuario(usuarios: any) {
    this.router.navigate(['/main/suscriptores/form-suscriptor', {id: usuarios.id}]);
  }

  buscarSuscriptor(evento:any){
    if (evento.target.value != '') {
      setTimeout(()=>{
        this.usuarioSvc.buscarSuscriptores(evento.target.value).subscribe(
          (res: any) => {
            this.usuarios = res.data;
          }
        );
      }, 2000);
    } else {      
      this.listarUsuarios();
    }
  }
}
