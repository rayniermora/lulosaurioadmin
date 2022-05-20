import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NotificacionService } from '../notificacion.service';

@Component({
  selector: 'app-list-notificacion',
  templateUrl: './list-notificacion.component.html',
  styleUrls: ['./list-notificacion.component.css']
})
export class ListNotificacionComponent implements OnInit {

  constructor(
    private _notificacionService : NotificacionService
    ) { }

  listNotificaciones : any[] = [];
  
  ngOnInit(): void {
    this.listarNotificaciones();
  }

  listarNotificaciones() {
    this._notificacionService.listarNotificaciones().subscribe(
      (response: any) => { 
        this.listNotificaciones = response.data;
      }
    );
  }

  enviarNotificacion(descripcion: any) {
    const frmNotificacion = new FormData();
    frmNotificacion.append('descripcion', descripcion);

    this._notificacionService.enviarNotificacion(frmNotificacion).subscribe(
      (response: any) => {
        this.response(response);
      }
    );
  }

  eliminarNotificacionPush(notificacion:any) {
    Swal.fire({
      icon: 'question',
      title: 'Confirmar',
      text: 'Realmente deseas eliminar éste registro?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      reverseButtons: true
    }).then((res: any) => {
      if( res ) {
        this._notificacionService.eliminarNotificacion(notificacion).subscribe(() => {
          Swal.fire({
            title: 'Éxito',
            icon: 'success',
            text: `Su registro ha sido eliminado satisfactoriamente!`
          });

          this.listarNotificaciones();
        });
      }
    });
  }

  response(data: any) {
    Swal.fire({
      title: 'Éxito',
      icon: 'success',
      text: `Notificación enviada satisfactoriamente!`
    })
  }

}
