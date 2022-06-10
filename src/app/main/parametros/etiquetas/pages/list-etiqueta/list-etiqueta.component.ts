import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LenguajesService } from '../../../lenguajes/lenguajes.service';
import { EtiquetaService } from '../../etiqueta.service';

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
    this.listarIdioma()
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
    this.etiquetasSvc.eliminarEtiqueta(data).subscribe(
      (res: any) => { }
    );

    Swal.fire({
      title: 'Éxito',
      icon: 'success',
      text: `Su registro ha sido eliminado satisfactoriamente!`
    });
  }

}
