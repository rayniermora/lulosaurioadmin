import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LenguajesService } from '../../../lenguajes/lenguajes.service';
import { EtiquetaService } from '../../etiqueta.service';
import { debounceTime, map, switchMap } from "rxjs/operators";
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-list-etiqueta',
  templateUrl: './list-etiqueta.component.html',
  styleUrls: ['./list-etiqueta.component.css']
})
export class ListEtiquetaComponent implements OnInit {

  etiquetas: any[] = [];
  lenguajes : any;

  constructor(
    private router: Router,
    private etiquetasSvc: EtiquetaService,
    private lenguajesSvc: LenguajesService
    ) { }

  ngOnInit() {
    this.listarIdioma();

    var searchEtiqueta = document.getElementById('searchEtiqueta') as HTMLInputElement;
    var keyUpEvent = fromEvent(searchEtiqueta, 'keyup').pipe(
      map((event) => (event.target as HTMLInputElement).value)
    );

    keyUpEvent.pipe(
      debounceTime(1000),
      switchMap(async (value) => this.buscarEtiqueta(value))
    ).subscribe();
  }

  listarIdioma() {
    this.lenguajesSvc.listLenguajes().subscribe((data: any) => {
      this.lenguajes = data;
    });
  }

  listarEtiquetas() {
    this.etiquetasSvc.listEtiquetas().subscribe(
      (res: any) => {
        this.etiquetas = res.response;
      }
    );
  }

  listarEtiquetasxIdioma(idlenguaje:any) {
    this.etiquetasSvc.listEtiquetasxIdioma(idlenguaje).subscribe(
      (res: any) => {
        this.etiquetas = res.response;
      }
    );
  }

  updateEtiqueta(etiqueta: any) {
    this.router.navigate(['/main/parametros/form-etiqueta', {id: etiqueta.id}]);
  }

  changeDropDownList(e:any) {
    let id = e.target.value;
    if (e.target.value =! 0) {
      this.listarEtiquetasxIdioma(id);
    } else {
      this.etiquetas = [];
    }
  }

  eliminarEtiqueta(data: any) {
    Swal.fire({
      icon: 'question',
      title: 'Confirmar',
      text: 'Realmente deseas eliminar éste registro?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      reverseButtons: true
    }).then((res: any) => {
      if( res.isConfirmed ) {
        this.etiquetasSvc.eliminarEtiqueta(data).subscribe(() => {
          Swal.fire({
            title: 'Éxito',
            icon: 'success',
            text: `Su registro ha sido eliminado satisfactoriamente!`
          });
        });
      }
    })
  }

  buscarEtiqueta(nombre:string){
    if (nombre.length > 0) {
      this.etiquetasSvc.buscarEtiqueta(nombre).subscribe(
        (res: any) => {
          this.etiquetas = res.data;
        }
      );
    } else {      
      this.etiquetas = [];
    }
  }
}
