import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import Swal from 'sweetalert2';
import { TipoSuscripcionService } from '../../tipo-suscripcion.service';

@Component({
  selector: 'app-form-tipo-suscripcion',
  templateUrl: './form-tipo-suscripcion.component.html',
  styleUrls: ['./form-tipo-suscripcion.component.css']
})
export class FormTipoSuscripcionComponent implements OnInit {

  form: FormGroup = new FormGroup({});;
  model: any = {};
  fields: FormlyFieldConfig[] = [];

  constructor(private route: ActivatedRoute,  private router: Router, private tiposuscSv: TipoSuscripcionService) { }

  ngOnInit() {
    this.fields = [
      {
        key: 'nombre',
        type: 'input',
        templateOptions: {
          label: 'Nombre',
          placeholder: 'Nombre ',
          required: true
        }
      },
      {
        key: 'valor',
        type: 'input',
        templateOptions: {
          label: 'Valor',
          placeholder: 'Valor',
          required: true
        }
      }
    ];

    if( this.route.snapshot.params['id'] ) {
      this.getTipoSuscripcion(this.route.snapshot.params['id']);
    }
  }

  getTipoSuscripcion(id: string) {
    this.tiposuscSv.listTipoSuscripcion(id).subscribe(
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
      this.tiposuscSv.updateTipoSuscripcion(model).subscribe(
        (res: any) =>{
          this.response()
        }
        );
      }
      else {
        this.tiposuscSv.saveTipoSuscripcion(formulario).subscribe(
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
    this.router.navigate(['/main/parametros/list-tipos-suscripciones'])
  }

}
