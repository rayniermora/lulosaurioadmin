import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { EtiquetaService } from 'src/app/main/parametros/etiquetas/etiqueta.service';
import Swal from 'sweetalert2';
import { CuentosService } from '../cuentos.service';

@Component({
  selector: 'app-asignar-etiquetas',
  templateUrl: './asignar-etiquetas.component.html',
  styleUrls: ['./asignar-etiquetas.component.css']
})
export class AsignarEtiquetasComponent implements OnInit {


  etiquetas: any = []
  etiquetasseleccionadas: any [] = []
  etiquetasexistentes: any [] = []
  id_etiquetas:any [] = []
  etix:any;
  habilitaenviar = false;
  id_cuento:any;
  id_lenguaje:any;

  constructor(private route: ActivatedRoute, private etiquetasSvc: EtiquetaService, private fb: FormBuilder,private cuentosSvc: CuentosService) { }

  async ngOnInit() {
    this.id_cuento = this.route.snapshot.params['id'];
    this.id_lenguaje = this.route.snapshot.params['idioma'];
    
    const res: any = await Promise.all([
      this.etiquetasSvc.listEtiquetasxIdioma(this.id_lenguaje).toPromise(),
      this.cuentosSvc.listEtiquetasExistentes(this.id_cuento).toPromise()

    ]);

    this.etiquetasexistentes = res[1];
    this.etiquetas = res[0].response;
  }



  cargarEtiqeutasExistentes(){
    this.cuentosSvc.listEtiquetasExistentes(this.id_cuento).subscribe(
      (res: any) => {
      }
    );
  }

  onSubmit(event: any){
    this.etix = {
      id:this.etiquetas[event.target.value].id,
      nombre: this.etiquetas[event.target.value].nombre
    };

    let esta = 0;

    this.etiquetasseleccionadas.forEach(etiqueta => {
      if (etiqueta.id == this.etiquetas[event.target.value].id) {
        esta = 1;
        return;
      }
    });

    if(esta == 0){
      this.habilitaenviar = true;
      this.etiquetasseleccionadas.push(this.etix)
    }else{
      Swal.fire({
        title: 'Error',
        icon: 'warning',
        text: `Ya existe este elemento dentro de las etiquetas seleccionadas`
      })
    }
  }

  deleteEtiqueta(i:any) {
    this.etiquetasseleccionadas.splice(i,1);
  }

  enviar(){
    let data = {
      id_cuento: this.id_cuento,
      array_etiquetas: this.etiquetasseleccionadas
    }
    this.cuentosSvc.crearEtiquetaCuento(data).subscribe(
      (res: any) => {
        this.cuentosSvc.listEtiquetasExistentes(this.id_cuento).subscribe(
          (res: any) => {
            this.etiquetasexistentes = res;
            this.etiquetasseleccionadas = [];
            this.habilitaenviar = false;
          }
        );
      }
    );

  }

  eliminarEtiquetaSeleccionada(etiqueta: any) {
    let data = {
      id: etiqueta
    }

    Swal.fire({
      title: 'Estas seguro?',
      text: "No pódras revertir los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result);
        this.cuentosSvc.deleteEtiquetasExistentes(data).subscribe(
          (res: any) => {
            this.cuentosSvc.listEtiquetasExistentes(this.id_cuento).subscribe(
              (res: any) => {
                this.etiquetasexistentes = res;
                Swal.fire(
                  'Eliminado!',
                  'La etiqueta fue eliminada con exito.',
                  'success'
                )

              }
            );
          }
        );

      }
    })
  }

}
