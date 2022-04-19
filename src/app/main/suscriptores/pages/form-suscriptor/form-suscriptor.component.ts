import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { UsuariosService } from 'src/app/main/parametros/usuarios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-suscriptor',
  templateUrl: './form-suscriptor.component.html',
  styleUrls: ['./form-suscriptor.component.css']
})
export class FormSuscriptorComponent implements OnInit {

  form: FormGroup = new FormGroup({});;
  model: any = {};
  fields: FormlyFieldConfig[] = [];

  constructor(private route: ActivatedRoute,  private router: Router,  private usuarioSvc: UsuariosService) { }

  ngOnInit() {
    this.fields = [

      {
        fieldGroupClassName: 'row',
        fieldGroup: [

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
        console.log(res);
        this.model = res;

      }
    );
  }

  onSubmit(model: any) {
    console.log(model);
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
    this.router.navigate(['/main/suscriptores/list-suscriptores'])
  }

}
