import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LenguajesService } from '../../../lenguajes/lenguajes.service';
import { TipoContenidoService } from '../../tipo-contenido.service';

@Component({
  selector: 'app-list-tipos-contenidos',
  templateUrl: './list-tipos-contenidos.component.html',
  styleUrls: ['./list-tipos-contenidos.component.css']
})
export class ListTiposContenidosComponent implements OnInit {

  tiposcontenido: any[] = [];
  lenguajes : any;

  constructor(
    private router: Router, 
    private tipocontenidoSvc: TipoContenidoService,
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

  listarTiposContenido() {
    this.tipocontenidoSvc.listTiposContenidos().subscribe(
      (res: any) => {
        this.tiposcontenido = res;
      }
    );
  }

  listarTiposContenidoxIdioma(idlenguaje:any) {
    this.tipocontenidoSvc.listTiposContenidosxIdioma(idlenguaje).subscribe(
      (res: any) => {
        this.tiposcontenido = res;
      }
    );
  }

  updateTipoContenido(tipocontenido: any) {
    this.router.navigate(['/main/parametros/form-tipo-contenido', {id: tipocontenido.id}]);
  }

  changeDropDownList(e:any) {
    let id = e.target.value;
    if (e.target.value =! 0) {
      this.listarTiposContenidoxIdioma(id);
    } else {
      this.tiposcontenido = [];
    }
  }

}
