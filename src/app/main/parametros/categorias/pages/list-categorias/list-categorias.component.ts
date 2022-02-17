import {  Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from '../../categorias.service';

@Component({
  selector: 'app-list-categorias',
  templateUrl: './list-categorias.component.html',
  styleUrls: ['./list-categorias.component.css']
})
export class ListCategoriasComponent implements OnInit {

  categorias:any [] = [];

  constructor( private categoriasSvc: CategoriasService, private router: Router ) { }

  ngOnInit() {
    this.listarCategorias()
  }

  listarCategorias() {
    this.categoriasSvc.listCategorias().subscribe(
      (res: any) => {
        console.log(res);
        this.categorias = res;

      }
    );
  }

  updateCategoria(categoria: any) {
    this.router.navigate(['/main/parametros/form-categoria', {id: categoria.id}]);
  }

}

