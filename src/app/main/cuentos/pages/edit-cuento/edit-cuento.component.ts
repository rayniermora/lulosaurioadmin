import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CategoriasService } from 'src/app/main/parametros/categorias/categorias.service';
import { LenguajesService } from 'src/app/main/parametros/lenguajes/lenguajes.service';
import Swal from 'sweetalert2';
import { CuentosService } from '../cuentos.service';

@Component({
  selector: 'app-edit-cuento',
  templateUrl: './edit-cuento.component.html',
  styleUrls: ['./edit-cuento.component.css']
})
export class EditCuentoComponent implements OnInit {

  form: FormGroup = new FormGroup({});;
  model: any = {};
  fields!: FormlyFieldConfig[];

  public Editor = ClassicEditorBuild;

  categorias : any = []
  lenguajes: any = []
  categoriashijas: any = []
  subcategorias: any = []
  tiposcontenidos: any = []
  contenidopago: any = []
  imagen_cuento :any;
  audio_cuento :any;
  video_cuento :any;
  id_cuento: any;
  contenido: any;
  public editorData = '';

  editAudio: any = false;
  editVideo: any = false;
  editBanner: any = false;
  
  constructor(
    private router: Router,
    private cuentosSvc: CuentosService,
    private categoriasSvc: CategoriasService,
    private lenguajesSvc: LenguajesService,
    private formbuild: FormBuilder,
    public _activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id_cuento = this._activeRoute.snapshot.params['idCuento'];
    this.crearFormulario();
    
    this.lenguajesSvc.listLenguajes().subscribe((data: any) => {
      this.lenguajes = data;
    });

    this.getCuento(this.id_cuento);
  }

  crearFormulario() {
    this.form = this.formbuild.group({
      id_lenguaje: new FormControl('',[Validators.required]),
      id_categoria: new FormControl('',[Validators.required]),
      id_sub_categoria: new FormControl('',[Validators.required]),
      id_tipo_contenido: new FormControl('',[Validators.required]),
      titulo: new FormControl('',[Validators.required]),
      sinopsis: new FormControl('',[Validators.required]),
      resumen: new FormControl('',[Validators.required]),
      duracion: new FormControl('',[Validators.required]),
      contenido_pago: new FormControl('',[Validators.required]),
      imagen_banner: [''],
      audio: [''],
      video_fondo: new FormControl('',[Validators.required])
    });
  }

  banner(e: any){
    if (e.target.files.length > 0) {
      this.imagen_cuento = e.target.files[0];
      this.editBanner = true;
    }
  }

  audioLibro(e: any){
    if (e.target.files.length > 0) {
      this.audio_cuento = e.target.files[0];
      this.editAudio = true;
    }
  }

  videoCuento(e: any){
    if (e.target.files.length > 0) {
      this.video_cuento = e.target.files[0];
      this.editVideo = true;
    }
  }

  getCuento(id: string) {
    this.cuentosSvc.listCuentoxId(id).subscribe((data: any) => {
      this.listarSubCategorias(data.id_lenguaje);
      this.listarCategorias(data.id_lenguaje);
      this.listarTiposContenido(data.id_lenguaje);
      this.listarTiposContenidoCuento(data.id_lenguaje);

      //Asignación de valores dentro del formulario
      this.form.get('id_lenguaje')?.patchValue(data.id_lenguaje);
      this.form.get('id_categoria')?.patchValue(data.id_categoria);
      this.form.get('id_sub_categoria')?.patchValue(data.id_sub_categoria);
      this.form.get('id_tipo_contenido')?.patchValue(data.id_tipo_contenido);
      this.form.get('titulo')?.patchValue(data.titulo);
      this.form.get('duracion')?.patchValue(data.duracion);
      this.form.get('contenido_pago')?.patchValue(data.contenido_pago);
      this.form.get('sinopsis')?.patchValue(data.sinopsis);
      this.form.get('resumen')?.patchValue(data.resumen);
      this.contenido = data.texto;
      this.form.get('id_lenguaje')?.disable();
    });
  }

  changeDropDownList( e:any ){
    if (e.target.value != 0) {
      this.listarCategorias(e.target.value);
      this.listarSubCategorias(e.target.value);
      this.listarTiposContenido(e.target.value);
      this.listarTiposContenidoCuento(e.target.value);
    } else {
      this.categorias = [];
      this.subcategorias = [];
      this.tiposcontenidos = [];
      this.contenidopago = [];
    }

  }

  listarCategorias(idioma:any) {
    this.categoriasSvc.listCategorias(idioma).subscribe(
      (response:any) => {
        this.categorias = response;
      }
    );
  }

  listarSubCategorias(idioma:any) {
    this.cuentosSvc.listSubCategoriasxIdioma(idioma).subscribe(
      (response:any) => {
        this.subcategorias = response;
      }
    );
  }

  listarTiposContenido(idioma:any) {
    this.cuentosSvc.listTipoContenidoxIdioma(idioma).subscribe(
      (response:any) => {
        this.tiposcontenidos = response;
      }
    );
  }

  listarTiposContenidoCuento(idioma:any) {
    this.cuentosSvc.listTipoContenidoCuentoxIdioma(idioma).subscribe(
      (response:any) => {
        this.contenidopago = response.data;
      }
    );
  }

  onSubmit() {
    const frmCuento = new FormData();
    frmCuento.append('id', this.id_cuento);
    frmCuento.append('texto', this.contenido);
    frmCuento.append('editAudio', this.editAudio);
    frmCuento.append('editBanner', this.editBanner);
    frmCuento.append('editVideo', this.editVideo);

    for (const item in this.form.value) {
      if (item === 'imagen_banner') {
        frmCuento.append(item, this.imagen_cuento);
      } else if (item === 'audio') {
        frmCuento.append(item, this.audio_cuento);
      } else if (item === 'video_fondo') {
        frmCuento.append(item, this.video_cuento);
      } else {
        frmCuento.append(item, this.form.value[item]);
      }
    }

    this.cuentosSvc.editCuento(frmCuento).subscribe(data => {
        let jsonData = JSON.stringify(data);
        let objData = JSON.parse(jsonData);

        if (objData.success) {
          this.response('Éxito', 'success', 'Su registro ha sido creado satisfactoriamente.');
        } else {
          this.response('Error', 'warning', 'Ha surgido un error.');
        }
    });
  }

  response(titulo: any, icono: any, texto:any) {
    Swal.fire({
      title: titulo,
      icon: icono,
      text: texto
    });

    this.router.navigate(['/main/cuentos/list-cuentos']);
  }
  
}
