import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import Swal from 'sweetalert2';
import { CuentosService } from '../cuentos.service';
import { debounceTime, map, switchMap } from "rxjs/operators";
import { SpinnerService } from 'src/app/services/spinner.service';
declare var $: any;

@Component({
  selector: 'app-list-cuentos',
  templateUrl: './list-cuentos.component.html',
  styleUrls: ['./list-cuentos.component.css']
})
export class ListCuentosComponent implements OnInit {
  constructor(
    private cuentosSvc: CuentosService,
    private router: Router,
    private spinnerService : SpinnerService) { }

  cuentos:any [] = [];
  cuentosxidioma: any [] = [];
  idCuento: any;
  idioma = 1;

  

  ngOnInit(): void {
    this.listCuentos();

    var searchCuento = document.getElementById('searchCuento') as HTMLInputElement;
    var keyUpEvent = fromEvent(searchCuento, 'keyup').pipe(
      map((event) => (event.target as HTMLInputElement).value)
    );

    keyUpEvent.pipe(
      debounceTime(1000),
      switchMap(async (value) => this.buscarCuento(value))
    ).subscribe();
  }

  listCuentos() {
    this.cuentosSvc.listCuentos(this.idioma).subscribe(
      (res: any) => {
        this.cuentos = res;
      }
    );
  }

  listCuentoxIdioma(id_cuento: any){
    this.idCuento = id_cuento;
    this.cuentosSvc.listCuentoxIdioma(id_cuento).subscribe(
      (response: any) => {
        this.cuentosxidioma = response;
    });
  }

  asignarEtiquetas(cuento: any){
    this.hideModal();
    this.router.navigate(['/main/cuentos/asignar-etiquetas', {id: cuento.id, idioma: cuento.id_lenguaje}]);
  }

  asignarCategorias(cuento: any){
    this.hideModal();
    this.router.navigate(['/main/cuentos/asignar-categorias-hijas', {id: cuento.id, idioma: cuento.id_lenguaje}]);
  }

  hideModal() {
    $('div#exampleModal').modal('hide');
  }

  cerrarModal() {
    this.cuentosxidioma = [];
  }

  eliminarCuento(cuento: any) {
    Swal.fire({
      icon: 'question',
      title: 'Confirmar',
      text: 'Realmente deseas eliminar éste registro?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      reverseButtons: true
    }).then((res: any) => {
      if( res ) {
        this.cuentosSvc.deleteCuento(cuento).subscribe(() => {
          Swal.fire({
            title: 'Éxito',
            icon: 'success',
            text: `Su registro ha sido eliminado satisfactoriamente!`
          })
          this.listCuentos();
        });
      }
    })
  }

  editarCuento(idCuento:any) {
    this.hideModal();
    this.router.navigate(['/main/cuentos/edit-cuento', {idCuento: idCuento}]);
  }

  agregrarEliminarCuentoDestacado(evento:any, cuento:any){
    if (evento.target.checked) {
      this.cuentosSvc.actualizarCuentoDestacado(cuento).subscribe(
        (response: any) => {
          if (response.success) {
            Swal.fire({
              title: 'Éxito',
              icon: 'success',
              text: `Cuento destacado seleccionado satisfactoriamente!`
            })
            this.listCuentos();
          }
      });
    }
  }

  buscarCuento(nombre:string){
    if (nombre.length > 0) {
      this.cuentosSvc.buscarCuento(nombre).subscribe(
        (res: any) => {
          this.cuentos = res.data;
        }
      );
    } else {      
      this.listCuentos();
    }
  }

  agregarEliminarCuentoRecomendado(evento:any, cuento:any){
    let chkRecomendado = evento.target.checked ? 1 : 0;

    let objCuento = {
      recomendado: chkRecomendado,
      id: cuento.id
    };
    
    this.cuentosSvc.actualizarCuentoRecomendado(objCuento).subscribe(
      (response:any) => {
        if (response.success) {
          Swal.fire({
            title: 'Éxito',
            icon: 'success',
            text: `Ejecutado satisfactoriamente!`
          });
          
          this.listCuentos();
        }
      }
    );
  }

}
