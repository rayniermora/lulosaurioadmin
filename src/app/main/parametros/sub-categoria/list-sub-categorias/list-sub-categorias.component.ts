import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubCategoriasService } from '../sub-categorias.service';

@Component({
  selector: 'app-list-sub-categorias',
  templateUrl: './list-sub-categorias.component.html',
  styleUrls: ['./list-sub-categorias.component.css']
})
export class ListSubCategoriasComponent implements OnInit {

  subcategorias:any [] = [];

  constructor(private router: Router, private subcategoriasSvc: SubCategoriasService) { }

  ngOnInit() {
    this.listSubCategorias()
  }

  listSubCategorias() {
    this.subcategoriasSvc.listSubCategorias().subscribe(
      (res: any) => {
        console.log(res);
        this.subcategorias = res;

      }
    );
  }

  updateSubCategoria(subcategoria: any){
    this.router.navigate(['/main/parametros/form-sub-categoria', {id: subcategoria.id}]);
  }

}
