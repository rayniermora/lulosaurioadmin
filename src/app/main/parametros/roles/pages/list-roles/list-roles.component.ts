import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

}
