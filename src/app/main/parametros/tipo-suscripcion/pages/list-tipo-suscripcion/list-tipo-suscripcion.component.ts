import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoSuscripcionService } from '../../tipo-suscripcion.service';

@Component({
  selector: 'app-list-tipo-suscripcion',
  templateUrl: './list-tipo-suscripcion.component.html',
  styleUrls: ['./list-tipo-suscripcion.component.css']
})
export class ListTipoSuscripcionComponent implements OnInit {

  tipossuscripciones:any [] = [];

  constructor(private router: Router, private tipossuspSvc: TipoSuscripcionService) { }

  ngOnInit() {
    this.listTiposSuscripciones()
  }

  listTiposSuscripciones() {
    this.tipossuspSvc.listTiposSuscripciones().subscribe(
      (res: any) => {
        this.tipossuscripciones = res;
      }
    );
  }

  updateTipoSuscripcion(tipo: any){
    this.router.navigate(['/main/parametros/form-tipo-suscripcion', {id: tipo.id}]);
  }

}
