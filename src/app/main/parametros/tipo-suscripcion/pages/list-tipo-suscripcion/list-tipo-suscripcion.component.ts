import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  
  eliminarTipoSuscripcion(data:any) {
    Swal.fire({
      icon: 'question',
      title: 'Confirmar',
      text: 'Realmente deseas eliminar éste registro?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      reverseButtons: true
    }).then((res: any) => {
      if( res.isConfirmed ) {
        this.tipossuspSvc.eliminarTipoSuscripcion(data).subscribe(() => {
          Swal.fire({
            title: 'Éxito',
            icon: 'success',
            text: `Su registro ha sido eliminado satisfactoriamente!`
          });
        });
      }
    })
  }

}
