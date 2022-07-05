import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/main/parametros/usuarios/usuarios.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-perfil',
  templateUrl: './form-perfil.component.html',
  styleUrls: ['./form-perfil.component.css']
})
export class FormPerfilComponent implements OnInit {

  form: FormGroup = new FormGroup({});;
  datosUsuarioJson: any;
  datosUsuarioObject: any;
  datosUsuarioForm: any;
  datosUsuario: any;

  constructor(
    private router: Router, 
    private usuarioSvc: UsuariosService,
    private formbuild: FormBuilder
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.obtenerDatosUsuario();
  }

  crearFormulario() {
    this.form = this.formbuild.group({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      password_confirm: new FormControl('',[Validators.required])
    });
  }

  obtenerDatosUsuario(){
    this.datosUsuarioJson = localStorage.getItem('_userlulo');
    this.datosUsuarioObject = JSON.parse(this.datosUsuarioJson);
    
    this.usuarioSvc.listUsuario(this.datosUsuarioObject.id).subscribe(
      (response:any) => {
        this.datosUsuario = response;
        this.form.get('name')?.patchValue(response.name);
        this.form.get('email')?.patchValue(response.email);
        this.form.get('email')?.disable();
      }
    );
  }

  actualizarDatos(){
    const frmUsuario = new FormData();
    frmUsuario.append('id', this.datosUsuario.id);
    frmUsuario.append('id_rol_usuario', this.datosUsuario.id_rol_usuario);

    for (const item in this.form.value) {
        frmUsuario.append(item, this.form.value[item]);
    }

    this.usuarioSvc.updateUsuario(frmUsuario).subscribe(
      (response:any) => {
        // console.log(response);

        Swal.fire({
          title: 'Éxito',
          icon: 'success',
          text: `Información actualizada satisfactoriamente!`
        });

        this.obtenerDatosUsuario();
      }
    );

  }

  onSubmit(){}

}
