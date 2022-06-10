import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LenguajesService } from '../../lenguajes/lenguajes.service';
import { SubCategoriasService } from '../sub-categorias.service';

@Component({
  selector: 'app-list-sub-categorias',
  templateUrl: './list-sub-categorias.component.html',
  styleUrls: ['./list-sub-categorias.component.css']
})
export class ListSubCategoriasComponent implements OnInit {

  subcategorias:any [] = [];
  lenguajes : any;

  constructor(
    private router: Router,
    private subcategoriasSvc: SubCategoriasService,
    private lenguajesSvc: LenguajesService
    ) { }

  ngOnInit() {
    this.listarIdioma()
  }

  listarIdioma() {
    this.lenguajesSvc.listLenguajes().subscribe((data: any) => {
      this.lenguajes = data;
    });
  }

  listSubCategorias() {
    this.subcategoriasSvc.listSubCategorias().subscribe(
      (res: any) => {
        this.subcategorias = res;
      }
    );
  }

  listSubCategoriasxIdioma(idlenguaje:any) {
    this.subcategoriasSvc.listSubCategoriasxIdioma(idlenguaje).subscribe(
      (res: any) => {
        this.subcategorias = res;
      }
    );
  }

  updateSubCategoria(subcategoria: any){
    this.router.navigate(['/main/parametros/form-sub-categoria', {id: subcategoria.id}]);
  }

  changeDropDownList(e:any) {
    let id = e.target.value;
    if (e.target.value =! 0) {
      this.listSubCategoriasxIdioma(id);
    } else {
      this.subcategorias = [];
    }
  }

  eliminarSubCategoria(data:any) {
    this.subcategoriasSvc.eliminarSubCategoria(data).subscribe(
      (res: any) => { }
    );

    Swal.fire({
      title: 'Éxito',
      icon: 'success',
      text: `Su registro ha sido eliminado satisfactoriamente!`
    });
  }

}
