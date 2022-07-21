import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NotificacionService } from '../../../../services/notificacion.service';

@Component({
  selector: 'app-form-notificacion',
  templateUrl: './form-notificacion.component.html',
  styleUrls: ['./form-notificacion.component.css']
})
export class FormNotificacionComponent implements OnInit {

  constructor(
    private formbuild: FormBuilder,
    private _notificacionService : NotificacionService,
    private router: Router
    ) { }

  form: FormGroup = new FormGroup({});
  datosUsuarioJson : any;
  datosUsuarioObject : any;

  ngOnInit(): void {
    this.crearFormulario();
    this.datosUsuarioJson = localStorage.getItem('_userlulo');
    this.datosUsuarioObject = JSON.parse(this.datosUsuarioJson);
  }

  crearFormulario() {
    this.form = this.formbuild.group({
      descripcion: new FormControl('',[Validators.required])
    });
  }

  onSubmit() {
    const frmNotificacion = new FormData();

    for(const notificacion in this.form.value){
      frmNotificacion.append(notificacion, this.form.value[notificacion]);
    }

    frmNotificacion.append('id_usuario',this.datosUsuarioObject.id);

    this._notificacionService.crearNotificacion(frmNotificacion).subscribe(
      (response: any) => {
        this.response(response);
      }
    );
  }

  response(data: any) {
    Swal.fire({
      title: 'Éxito',
      icon: 'success',
      text: `Notificación creada y enviada satisfactoriamente!`
    })
    this.router.navigate(['/main/notificaciones/list-notificacion'])
  }

}
