import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import Swal from 'sweetalert2';
import { LenguajesService } from '../../../../../services/lenguajes.service';

@Component({
  selector: 'app-form-lenguajes',
  templateUrl: './form-lenguajes.component.html',
  styleUrls: ['./form-lenguajes.component.css']
})
export class FormLenguajesComponent implements OnInit {

  form: FormGroup = new FormGroup({});;
  model: any = {};
  fields: FormlyFieldConfig[] = [];

  constructor(private route: ActivatedRoute,  private router: Router, private lenguajeSvc: LenguajesService) { }

  ngOnInit() {
    this.fields = [
      {
        key: 'nombre',
        type: 'input',
        templateOptions: {
          label: 'Nombre',
          placeholder: 'Nombre lenguaje',
          required: true
        }
      }
    ];
    if( this.route.snapshot.params['id'] ) {
      this.getLenguaje(this.route.snapshot.params['id']);
    }
  }

  getLenguaje(id: string) {
    this.lenguajeSvc.listLenguaje(id).subscribe(
      (res:any) => {
        this.model = res;
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
      this.lenguajeSvc.updateLenguaje(formulario).subscribe(
        (res: any)=> {
          this.response()
        }
      );
    }
    else {
      this.lenguajeSvc.saveLenguaje(model).subscribe(
        (res: any)=>{
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
    this.router.navigate(['/main/parametros/list-lenguajes'])
  }

}
