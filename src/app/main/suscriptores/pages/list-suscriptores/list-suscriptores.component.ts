import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/main/parametros/usuarios/usuarios.service';
import { debounceTime, map, switchMap } from "rxjs/operators";
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-list-suscriptores',
  templateUrl: './list-suscriptores.component.html',
  styleUrls: ['./list-suscriptores.component.css']
})
export class ListSuscriptoresComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private router: Router, private usuarioSvc: UsuariosService) { }

  ngOnInit() {
    this.listarUsuarios();

    var searchSuscriptor = document.getElementById('searchSuscriptor') as HTMLInputElement;
    var keyUpEvent = fromEvent(searchSuscriptor, 'keyup').pipe(
      map((event) => (event.target as HTMLInputElement).value)
    );

    keyUpEvent.pipe(
      debounceTime(1000),
      switchMap(async (value) => this.buscarSuscriptor(value))
    ).subscribe();
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

  buscarSuscriptor(nombre:string){
    if (nombre.length > 0) {
      this.usuarioSvc.buscarSuscriptores(nombre).subscribe(
        (res: any) => {
          this.usuarios = res.data;
        }
      );
    } else {      
      this.listarUsuarios();
    }
  }
}
