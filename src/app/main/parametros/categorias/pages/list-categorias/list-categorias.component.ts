import {  Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from '../../../../../services/categorias.service';
import { LenguajesService } from 'src/app/services/lenguajes.service';
import Swal from 'sweetalert2';
import { fromEvent } from 'rxjs';
import { debounceTime, map, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-list-categorias',
  templateUrl: './list-categorias.component.html',
  styleUrls: ['./list-categorias.component.css']
})
export class ListCategoriasComponent implements OnInit {

  categorias:any [] = [];
  lenguajes : any;

  constructor(
    private categoriasSvc: CategoriasService, 
    private lenguajesSvc: LenguajesService,
    private router: Router ) { }

  ngOnInit() {
    this.listarIdioma();

    var searchCategoria = document.getElementById('searchCategoria') as HTMLInputElement;
    var keyUpEvent = fromEvent(searchCategoria, 'keyup').pipe(
      map((event) => (event.target as HTMLInputElement).value)
    );

    keyUpEvent.pipe(
      debounceTime(1000),
      switchMap(async (value) => this.buscarCategoria(value))
    ).subscribe();
  }

  listarCategorias(id_lenguaje:any) {    
    this.categoriasSvc.listCategorias(id_lenguaje).subscribe(
      (res: any) => {
        this.categorias = res;
      }
    );
  }

  listarIdioma() {
    this.lenguajesSvc.listLenguajes().subscribe((data: any) => {
      this.lenguajes = data;
    });
  }

  updateCategoria(categoria: any) {
    this.router.navigate(['/main/parametros/form-categoria', {id: categoria.id}]);
  }

  changeDropDownList(e:any) {
    let id = e.target.value;
    if (e.target.value =! 0) {
      this.listarCategorias(id);
    } else {
      this.categorias = [];
    }
  }

  eliminarCategoria(data: any) {
    Swal.fire({
      icon: 'question',
      title: 'Confirmar',
      text: 'Realmente deseas eliminar éste registro?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      reverseButtons: true
    }).then((res: any) => {
      if( res.isConfirmed ) {
        this.categoriasSvc.eliminarCategoria(data).subscribe(() => {
          Swal.fire({
            title: 'Éxito',
            icon: 'success',
            text: `Su registro ha sido eliminado satisfactoriamente!`
          });
        });
      }
    })
  }

  buscarCategoria(nombre:string){
    if (nombre.length > 0) {
      this.categoriasSvc.buscarCategoria(nombre).subscribe(
        (res: any) => {
          this.categorias = res.data;
        }
      );
    } else {      
      this.categorias = [];
    }
  }
}

