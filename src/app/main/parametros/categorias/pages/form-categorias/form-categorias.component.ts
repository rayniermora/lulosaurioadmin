import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { LenguajesService } from '../../../lenguajes/lenguajes.service';
import { CategoriasService } from '../../categorias.service';

@Component({
  selector: 'app-form-categorias',
  templateUrl: './form-categorias.component.html',
  styleUrls: ['./form-categorias.component.css']
})
export class FormCategoriasComponent implements OnInit {

  form: FormGroup = new FormGroup({});;
  model = {};
  fields: FormlyFieldConfig[] = [];

  lenguajes: [] = [];

  constructor(private route: ActivatedRoute,  private router: Router, private categoriasSvc: CategoriasService, private lenguajeSvc: LenguajesService) {
    this.getLenguajes()
  }

  ngOnInit() {

    setTimeout(() => {
      this.fields = [
        {
          key: 'nombre',
          type: 'input',
          templateOptions: {
            label: 'Nombre',
            placeholder: 'Nombre categoria',
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

    }, 1500);


    if( this.route.snapshot.params['id'] ) {
      this.getCategoria(this.route.snapshot.params['id']);
    }
  }

  getCategoria(id: string) {
    this.categoriasSvc.listCategoria(id).subscribe((data: any) => {
      console.log(data);

      this.model = data;
    });

  }

  getLenguajes(){
    this.lenguajeSvc.listLenguajes().subscribe(
      (res: any) => {
        this.lenguajes = res;
      }
    );
  }

  onSubmit(model: any) {
    if( model.id ) {

    }
    else {
      this.categoriasSvc.saveCategoria(model).subscribe(
        (res: any) => {
          console.log('exito',res);

        }
      );
    }
  }

}
