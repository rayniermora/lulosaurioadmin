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

  response(data: any) {
    Swal.fire({
      title: 'Éxito',
      icon: 'success',
      text: `Notificación enviada satisfactoriamente!`
    })
  }

}
