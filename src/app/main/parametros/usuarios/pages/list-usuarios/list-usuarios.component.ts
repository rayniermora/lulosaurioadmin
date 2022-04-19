import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private router: Router, private usuarioSvc: UsuariosService) { }

  ngOnInit() {
    this.listarUsuarios()
  }

  listarUsuarios() {
    this.usuarioSvc.listUsuarios().subscribe(
      (res: any) => {
        this.usuarios = res;

      }
    );
  }

  updateUsuario(usuarios: any) {
    this.router.navigate(['/main/parametros/form-usuario', {id: usuarios.id}]);
  }

}
