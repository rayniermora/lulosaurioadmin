import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RolesService } from '../../roles.service';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {

  roles:any [] = [];

  constructor( private rolesSvc: RolesService, private router: Router) { }

  ngOnInit() {
    this.listarRoles()
  }

  listarRoles() {
    this.rolesSvc.listRoles().subscribe(
      (res: any) => {
        this.roles = res;
      }
    );
  }

  updateRol(rol: any) {
    this.router.navigate(['/main/parametros/form-rol', {id: rol.id}]);
  }

  eliminarRol(data:any) {
    Swal.fire({
      icon: 'question',
      title: 'Confirmar',
      text: 'Realmente deseas eliminar éste registro?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      reverseButtons: true
    }).then((res: any) => {
      if( res.isConfirmed ) {
        this.rolesSvc.eliminarRol(data).subscribe(() => {
          Swal.fire({
            title: 'Éxito',
            icon: 'success',
            text: `Su registro ha sido eliminado satisfactoriamente!`
          });
        });
      }
    })
  }

}
