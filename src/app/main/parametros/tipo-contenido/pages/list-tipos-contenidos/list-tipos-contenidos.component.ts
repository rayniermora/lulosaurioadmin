import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoContenidoService } from '../../tipo-contenido.service';

@Component({
  selector: 'app-list-tipos-contenidos',
  templateUrl: './list-tipos-contenidos.component.html',
  styleUrls: ['./list-tipos-contenidos.component.css']
})
export class ListTiposContenidosComponent implements OnInit {

  tiposcontenido: any[] = [];

  constructor(private router: Router, private tipocontenidoSvc: TipoContenidoService) { }

  ngOnInit() {
    this.listarTiposContenido()
  }

  listarTiposContenido() {
    this.tipocontenidoSvc.listTiposContenidos().subscribe(
      (res: any) => {
        this.tiposcontenido = res;

      }
    );
  }

  updateTipoContenido(tipocontenido: any) {
    this.router.navigate(['/main/parametros/form-tipo-contenido', {id: tipocontenido.id}]);
  }

}
