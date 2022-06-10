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
    this.categoriasSvc.eliminarCategoria(data).subscribe(
      (res: any) => { }
    );

    Swal.fire({
      title: 'Éxito',
      icon: 'success',
      text: `Su registro ha sido eliminado satisfactoriamente!`
    });
  }

}

