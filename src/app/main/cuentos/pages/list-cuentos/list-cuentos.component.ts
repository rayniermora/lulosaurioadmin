import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuentosService } from '../cuentos.service';
declare var $: any;

@Component({
  selector: 'app-list-cuentos',
  templateUrl: './list-cuentos.component.html',
  styleUrls: ['./list-cuentos.component.css']
})
export class ListCuentosComponent implements OnInit {

  constructor( private cuentosSvc: CuentosService, private router: Router ) { }

  cuentos:any [] = [];
  cuentosxidioma: any [] = [];
  idCuento: any;
  idioma = 1;

  ngOnInit(): void {
    this.listCuentos();
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
        console.log(response);

        this.cuentosxidioma = response;
    });
  }
  asignarEtiquetas(cuento: any){
    this.router.navigate(['/main/cuentos/asignar-etiquetas', {id: cuento.id}]);
  }

  asignarCategorias(cuento: any){
    this.router.navigate(['/main/cuentos/asignar-categorias-hijas', {id: cuento.id}]);
  }


  editar(e:any)
  {
    $('div#exampleModal').modal('hide');
    // this.router.navigate(['form-cuentos']);
  }

  cerrarModal() {
    this.cuentosxidioma = [];
  }

}
