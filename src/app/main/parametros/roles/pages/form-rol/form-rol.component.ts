import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import Swal from 'sweetalert2';
import { RolesService } from '../../roles.service';

@Component({
  selector: 'app-form-rol',
  templateUrl: './form-rol.component.html',
  styleUrls: ['./form-rol.component.css']
})
export class FormRolComponent implements OnInit {

  form: FormGroup = new FormGroup({});;
  model: any = {};
  fields: FormlyFieldConfig[] = [];

  constructor(private route: ActivatedRoute,  private router: Router, private rolSvc: RolesService) { }

  ngOnInit() {
    this.fields = [
      {
        key: 'nombre',
        type: 'input',
        templateOptions: {
          label: 'Nombre',
          placeholder: 'Nombre Rol',
          required: true
        }
      }

    ];
    if( this.route.snapshot.params['id'] ) {
      this.getRol(this.route.snapshot.params['id']);
    }
  }

  getRol(id: string) {
    this.rolSvc.listRol(id).subscribe((data: any) => {
      this.model = data;
    });

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
      this.rolSvc.updateRol(formulario).subscribe(
        (res: any)=> {
          this.response()
        }
      );
    }
    else {
      this.rolSvc.saveRol(model).subscribe(
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
    this.router.navigate(['/main/parametros/list-roles'])
  }

}
