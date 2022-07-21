import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import Swal from 'sweetalert2';
import { LenguajesService } from '../../../../../services/lenguajes.service';
import { CategoriaHijaService } from '../../../../../services/categoria-hija.service';

@Component({
  selector: 'app-form-categoria-hija',
  templateUrl: './form-categoria-hija.component.html',
  styleUrls: ['./form-categoria-hija.component.css']
})
export class FormCategoriaHijaComponent implements OnInit {

  form: FormGroup = new FormGroup({});;
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  lenguajes = []

  constructor(private route: ActivatedRoute,  private router: Router,private lenguajesSvc: LenguajesService, private CategoriaHijaSvc: CategoriaHijaService) { }

  async ngOnInit( ) {

    const res: any = await Promise.all([
      this.lenguajesSvc.listLenguajes().toPromise()
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
      this.getCategoriaHija(this.route.snapshot.params['id']);
    }

  };

  getCategoriaHija(id: string) {
    this.CategoriaHijaSvc.listCategoriaHija(id).subscribe(
      (res: any) => {
        this.model = res;
      }
    );
  }

  getLenguajes(){
    this.lenguajesSvc.listLenguajes().subscribe(
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
      this.CategoriaHijaSvc.updateCategoriaHija(model).subscribe(
        (res: any) =>{
          this.response()
        }
        );
      }
      else {
        this.CategoriaHijaSvc.saveCategoriaHija(formulario).subscribe(
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
    this.router.navigate(['/main/parametros/list-categoria-hija'])
  }

}
