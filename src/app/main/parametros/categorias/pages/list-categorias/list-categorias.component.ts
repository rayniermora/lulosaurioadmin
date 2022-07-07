import {  Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from '../../categorias.service';
import { LenguajesService } from 'src/app/main/parametros/lenguajes/lenguajes.service';
import Swal from 'sweetalert2';

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

  buscarCategoria(evento:any){
    if (evento.target.value != '') {
      setTimeout(()=>{
        this.categoriasSvc.buscarCategoria(evento.target.value).subscribe(
          (res: any) => {
            this.categorias = res.data;
          }
        );
      }, 2000);
    } else {      
      this.categorias = [];
    }
  }
}

