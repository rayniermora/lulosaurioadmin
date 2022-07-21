import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import { CuentosService } from '../../../../services/cuentos.service';
import Swal from 'sweetalert2';
import { CategoriaHijaService } from 'src/app/services/categoria-hija.service';

@Component({
  selector: 'app-asignar-categorias-hijas',
  templateUrl: './asignar-categorias-hijas.component.html',
  styleUrls: ['./asignar-categorias-hijas.component.css']
})
export class AsignarCategoriasHijasComponent implements OnInit {


  categoriahija: any = []
  categoriashijasseleccionadas: any [] = []
  cathijasexistentes: any [] = []
  id_cathijas:any [] = []
  etix:any;
  habilitaenviar = false;
  id_cuento:any;
  id_lenguaje:any;

  constructor(private route: ActivatedRoute, private categoriaHija: CategoriaHijaService, private cuentosSvc: CuentosService) { }

  async ngOnInit() {
    this.id_cuento = this.route.snapshot.params['id'];
    this.id_lenguaje = this.route.snapshot.params['idioma'];

    const res: any = await Promise.all([
      this.categoriaHija.listCategoriaHijaxIdioma(this.id_lenguaje).toPromise(),
      this.cuentosSvc.listCategoriasHijasExistentes(this.id_cuento).toPromise()
    ])

    this.categoriahija = res[0];
    this.cathijasexistentes = res[1];

  }

  cargarCategoriasHija(){
    this.cuentosSvc.listCategoriasHijasExistentes(this.id_cuento).subscribe((res: any) => {});
  }

  onSubmit(event: any){
    this.etix = {
      id:this.categoriahija[event.target.value].id,
      nombre: this.categoriahija[event.target.value].nombre
    };
    let esta = 0;

    this.categoriashijasseleccionadas.forEach(etiqueta => {
      if (etiqueta.id == this.categoriahija[event.target.value].id) {
        esta = 1;
        return;

      }
    });

    if(esta == 0){
      this.habilitaenviar = true;
      this.categoriashijasseleccionadas.push(this.etix)
    }else{
      Swal.fire({
        title: 'Error',
        icon: 'warning',
        text: `Ya existe este elemento dentro de las etiquetas seleccionadas`
      })
    }
  }

  deleteEtiqueta(i:any) {
    this.categoriashijasseleccionadas.splice(i,1);
  }

  enviar(){
    let data = {
      id_cuento: this.id_cuento,
      array_categoria_hija: this.categoriashijasseleccionadas
    }
    this.cuentosSvc.crearCategoriaHijaCuento(data).subscribe(
      (res: any) => {
        this.cuentosSvc.listCategoriasHijasExistentes(this.id_cuento).subscribe(
          (res: any) => {
            this.cathijasexistentes = res;
            this.categoriashijasseleccionadas = [];
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
        this.cuentosSvc.deleteCategoriaHijaExistente(data).subscribe(
          (res: any) => {
            this.cuentosSvc.listCategoriasHijasExistentes(this.id_cuento).subscribe(
              (res: any) => {
                this.cathijasexistentes = res;
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
