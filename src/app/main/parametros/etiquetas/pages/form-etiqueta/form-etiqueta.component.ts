import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { LenguajesService } from '../../../lenguajes/lenguajes.service';
import Swal from 'sweetalert2';
import { EtiquetaService } from '../../etiqueta.service';

@Component({
  selector: 'app-form-etiqueta',
  templateUrl: './form-etiqueta.component.html',
  styleUrls: ['./form-etiqueta.component.css']
})
export class FormEtiquetaComponent implements OnInit {

  form: FormGroup = new FormGroup({});;
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  lenguajes = []

  etiquetas: [] = [];

  constructor(private route: ActivatedRoute,  private router: Router,  private lenguajeSvc: LenguajesService, private etiquetaSvc: EtiquetaService) { }

  async ngOnInit() {
    const res: any = await Promise.all([
      this.lenguajeSvc.listLenguajes().toPromise()
    ])


    this.lenguajes = res[0];
    this.fields = [
      {
        key: 'nombre',
        type: 'input',
        templateOptions: {
          label: 'Nombre',
          placeholder: 'Nombre categoria Hija',
          required: true
        }
      },
      {
        key: 'id_lenguaje',
        type: 'select',
        templateOptions: {
          label: 'Lenguaje',
          options: this.lenguajes,
          valueProp: 'id',
          labelProp: 'nombre',
          required: true
        }
      }
    ];

    if( this.route.snapshot.params['id'] ) {
      this.getLenguaje(this.route.snapshot.params['id']);
    }
  }

  getLenguaje(id: string) {
    this.etiquetaSvc.listEtiqueta(id).subscribe(
      (res: any) => {
        this.model = res;
      }
    );
  }

  getLenguajes(){
    this.lenguajeSvc.listLenguajes().subscribe(
      (res: any) => {
        this.lenguajes = res;
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
      this.etiquetaSvc.updateEtiqueta(model).subscribe(
        (res: any) =>{
          this.response()
        }
        );
      }
      else {
        this.etiquetaSvc.saveEtiqueta(formulario).subscribe(
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
    this.router.navigate(['/main/parametros/list-etiquetas'])
  }

}
