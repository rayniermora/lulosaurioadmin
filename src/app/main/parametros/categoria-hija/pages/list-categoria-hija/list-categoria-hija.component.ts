import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaHijaService } from '../../categoria-hija.service';

@Component({
  selector: 'app-list-categoria-hija',
  templateUrl: './list-categoria-hija.component.html',
  styleUrls: ['./list-categoria-hija.component.css']
})
export class ListCategoriaHijaComponent implements OnInit {

  categoriashijas:any [] = [];

  constructor( private categoriasHijaSvc: CategoriaHijaService, private router: Router ) { }

  ngOnInit() {
    this.listarCategoriasHijas()
  }

  listarCategoriasHijas() {
    this.categoriasHijaSvc.listCategoriasHijas().subscribe(
      (res: any) => {
        this.categoriashijas = res;
        console.log(this.categoriashijas);

      }
    );
  }

  updateCategoria(categoria: any) {
    this.router.navigate(['/main/parametros/form-categoria-hija', {id: categoria.id}]);
  }

}
