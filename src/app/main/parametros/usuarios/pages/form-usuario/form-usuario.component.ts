import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import Swal from 'sweetalert2';
import { RolesService } from '../../../roles/roles.service';
import { UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  form: FormGroup = new FormGroup({});;
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  roles = []

  constructor(private route: ActivatedRoute,  private router: Router, private rolSvc: RolesService, private usuarioSvc: UsuariosService) { }

  async ngOnInit() {
    const res: any = await Promise.all([
      this.rolSvc.listRoles().toPromise()
    ])


    this.roles = res[0];

    this.fields = [

      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-12 col-lg-6',
            key: 'id_rol_usuario',
            type: 'select',
            templateOptions: {
              label: 'Roles',
              required: true,
              options: this.roles,
              valueProp: 'id',
              labelProp: 'nombre'
            }
          },
          {
            className: 'col-12 col-lg-6',
            key: 'name',
            type: 'input',
            templateOptions: {
              label: 'Nombre',
              placeholder: 'Nombre usuario',
              required: true
            }
          },
          {
            className: 'col-12 col-lg-6',
            key: 'email',
            type: 'input',
            templateOptions: {
              label: 'Email',
              placeholder: 'Email usuario',
              required: true
            }
          },
          {
            className: 'col-12 col-lg-6',
            key: 'password',
            type: 'input',
            templateOptions: {
              label: 'Password',
              type: 'password',
              placeholder: 'Contraseña',
              required: false
            }
          },


        ],
      },


    ];

    if( this.route.snapshot.params['id'] ) {
      this.getUsuario(this.route.snapshot.params['id']);
    }
  }

  getUsuario(id: string) {
    this.usuarioSvc.listUsuario(id).subscribe(
      (res: any) => {
        this.model = res;
      }
    );
  }

  getRoles(){
    this.rolSvc.listRoles().subscribe(
      (res: any) => {
        this.roles = res;
      }
    );
  }

  onSubmit(model: any) {
    const formulario = new FormData();
    for (const key in model) {
      if (Object.prototype.hasOwnProperty.call(model, key)) {
        const element = model[key];
        formulario.append(key,element);
      }
    }

    if( model.id ) {
      this.usuarioSvc.updateUsuario(model).subscribe(
        (res: any) =>{
          this.response()
        }
        );
      }
      else {
        this.usuarioSvc.saveUsuario(formulario).subscribe(
          (res: any) => {
            this.response()
          }
        );
    }
  }

  response() {
    Swal.fire({
      title: 'Éxito',
      icon: 'success',
      text: `Su registro ha sido ${ this.model['id'] ? 'actualizado' : 'creado' } satisfactoriamente!`
    })
    this.router.navigate(['/main/parametros/list-usuarios'])
  }

}
