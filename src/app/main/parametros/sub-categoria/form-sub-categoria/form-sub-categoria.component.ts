import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { LenguajesService } from '../../lenguajes/lenguajes.service';
import { SubCategoriasService } from '../sub-categorias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-sub-categoria',
  templateUrl: './form-sub-categoria.component.html',
  styleUrls: ['./form-sub-categoria.component.css']
})
export class FormSubCategoriaComponent implements OnInit {


  form: FormGroup = new FormGroup({});;
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  lenguajes = []

  constructor(private route: ActivatedRoute,  private router: Router,  private lenguajeSvc: LenguajesService, private subcategoriaSvc: SubCategoriasService) { }

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
      this.getSubCategoria(this.route.snapshot.params['id']);
    }

  }

  getSubCategoria(id: string) {
    this.subcategoriaSvc.listSubCategoria(id).subscribe(
      (res: any) => {
        console.log(res);
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
    console.log(model);
    const formulario = new FormData();
    for (const key in model) {
      if (Object.prototype.hasOwnProperty.call(model, key)) {
        const element = model[key];
        formulario.append(key,element);
      }
    }

    if( model.id ) {
      this.subcategoriaSvc.updateSubCategoria(model).subscribe(
        (res: any) =>{
          this.response()
        }
        );
      }
      else {
        this.subcategoriaSvc.saveSubCategoria(formulario).subscribe(
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
    this.router.navigate(['/main/parametros/list-sub-categorias'])
  }

}
