import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LenguajesService } from '../../../lenguajes/lenguajes.service';
import { CategoriaHijaService } from '../../categoria-hija.service';

@Component({
  selector: 'app-list-categoria-hija',
  templateUrl: './list-categoria-hija.component.html',
  styleUrls: ['./list-categoria-hija.component.css']
})
export class ListCategoriaHijaComponent implements OnInit {

  categoriashijas:any [] = [];
  lenguajes : any;

  constructor(
    private categoriasHijaSvc: CategoriaHijaService,
    private router: Router,
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

  listarCategoriasHijas() {
    this.categoriasHijaSvc.listCategoriasHijas().subscribe(
      (res: any) => {
        this.categoriashijas = res;
      }
    );
  }

  listarCategoriasHijasxIdioma(idLenguaje:any) {
    this.categoriasHijaSvc.listCategoriaHijaxIdioma(idLenguaje).subscribe(
      (res: any) => {
        console.log(this.categoriashijas);
        this.categoriashijas = res;
      }
    );
  }

  updateCategoria(categoria: any) {
    this.router.navigate(['/main/parametros/form-categoria-hija', {id: categoria.id}]);
  }

  changeDropDownList(e:any) {
    let id = e.target.value;
    if (e.target.value =! 0) {
      this.listarCategoriasHijasxIdioma(id);
    } else {
      this.categoriashijas = [];
    }
  }

}
