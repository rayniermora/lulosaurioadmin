import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CategoriasService } from 'src/app/main/parametros/categorias/categorias.service';
import { LenguajesService } from 'src/app/main/parametros/lenguajes/lenguajes.service';
import { CuentosService } from '../cuentos.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cuentos',
  templateUrl: './form-cuentos.component.html',
  styleUrls: ['./form-cuentos.component.css']
})
export class FormCuentosComponent implements OnInit {

  form: FormGroup = new FormGroup({});;
  model: any = {};
  fields!: FormlyFieldConfig[];

  categorias = []
  lenguajes = []
  categoriashijas = []
  subcategorias = []
  tiposcontenidos = []
  contenidopago = [
    {'value': 0, 'label': 'FREE'},
    {'value': 1, 'label': 'PREMIUM'},
  ]



  constructor( private router: Router,private cuentosSvc: CuentosService, private categoriasSvc: CategoriasService, private lenguajesSvc: LenguajesService ) { }

  async ngOnInit() {

    const res: any = await Promise.all([
      this.categoriasSvc.listCategorias().toPromise(),
      this.lenguajesSvc.listLenguajes().toPromise(),
      this.cuentosSvc.listCategoriasHijas().toPromise(),
      this.cuentosSvc.listSubCategorias().toPromise(),
      this.cuentosSvc.listTipoContenido().toPromise()
    ])

    this.categorias = res[0];
    this.lenguajes = res[1];
    this.categoriashijas = res[2];
    this.subcategorias = res[3];
    this.tiposcontenidos = res[4];

    console.log(this.categorias);
    console.log(this.lenguajes);
    console.log(this.categoriashijas);
    console.log(this.subcategorias);
    console.log(this.tiposcontenidos);



    this.fields = [

      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-12 col-lg-6',
            key: 'id_categoria',
            type: 'select',
            templateOptions: {
              label: 'Categorias',
              required: true,
              options: this.categorias,
              valueProp: 'id',
              labelProp: 'nombre'
            }
          },
          {
            className: 'col-12 col-lg-6',
            key: 'id_sub_categoria',
            type: 'select',
            templateOptions: {
              label: 'Sub-Categorias',
              required: true,
              options: this.subcategorias,
              valueProp: 'id',
              labelProp: 'nombre'
            }
          },
          {
            className: 'col-12 col-lg-6',
            key: 'id_categoria_hija',
            type: 'select',
            templateOptions: {
              label: 'Categorias Hijas',
              required: true,
              options: this.categoriashijas,
              valueProp: 'id',
              labelProp: 'nombre'
            }
          },
          {
            className: 'col-12 col-lg-6',
            key: 'id_lenguaje',
            type: 'select',
            templateOptions: {
              label: 'Lenguajes',
              required: true,
              options: this.lenguajes,
              valueProp: 'id',
              labelProp: 'nombre'
            }
          },
          {
            className: 'col-12 col-lg-6',
            key: 'id_tipo_contenido',
            type: 'select',
            templateOptions: {
              label: 'Tipo Contenido',
              required: true,
              options: this.tiposcontenidos,
              valueProp: 'id',
              labelProp: 'nombre'
            }
          },
          {
            className: 'col-12 col-lg-6',
            key: 'titulo',
            type: 'input',
            templateOptions: {
              label: 'Titulo',
              placeholder: '',
              required: true
            }
          },
          {
            className: 'col-12 col-lg-6',
            key: "sinopsis",
            type: "textarea",
            templateOptions: {
              label: "Sinopsis",
              placeholder: '',
              required: true
            },
          },
          {
            className: 'col-12 col-lg-6',
            key: "resumen",
            type: "textarea",
            templateOptions: {
              label: "Resumen",
              placeholder: '',
              required: true
            },
          },
          {
            className: 'col-12 col-lg-6',
            key: 'duracion',
            type: 'input',
            templateOptions: {
              label: 'Duración',
              placeholder: '',
              required: true
            }
          },
          {
            className: 'col-12 col-lg-6',
            key: 'contenido_pago',
            type: 'select',
            templateOptions: {
              label: 'Contenido pago',
              required: true,
              options: this.contenidopago,
              valueProp: 'value',
              labelProp: 'label',
            }
          },

        ],
      },


    ];
  }

  banner(e: any){
    this.model['imagen_banner'] = e.files[0];
  }

  audioLibro(e: any){
    this.model['audio'] = e.files[0];
  }

  getCuento(id: string) {
    this.cuentosSvc.listCuento(id).subscribe((data: any) => {
      this.model = data.data;
    });
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
      // actualizar
    }
    else {
      this.cuentosSvc.saveCuento(formulario).subscribe(data => {
        this.response(data)
      });
    }
  }



  response(data: any) {
    Swal.fire({
      title: 'Éxito',
      icon: 'success',
      text: `Su registro ha sido ${ this.model['id'] ? 'actualizado' : 'creado' } satisfactoriamente!`
    })
    this.router.navigate(['/main/cuentos/list-cuentos'])
  }

}
