import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CategoriasService } from 'src/app/main/parametros/categorias/categorias.service';
import { LenguajesService } from 'src/app/main/parametros/lenguajes/lenguajes.service';
import { CuentosService } from '../cuentos.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-form-cuentos',
  templateUrl: './form-cuentos.component.html',
  styleUrls: ['./form-cuentos.component.css']
})
export class FormCuentosComponent implements OnInit {

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


  constructor(
    private router: Router,
    private cuentosSvc: CuentosService,
    private categoriasSvc: CategoriasService,
    private lenguajesSvc: LenguajesService,
    private formbuild: FormBuilder,
    public _activeRoute: ActivatedRoute ) {
      this.id_cuento = (_activeRoute.snapshot.paramMap.get('id') != null) ? _activeRoute.snapshot.paramMap.get('id') : 0;
     }

  async ngOnInit() {
    this.crearFormulario();

    this.lenguajesSvc.listLenguajes().subscribe((data: any) => {
      this.lenguajes = data;
    });

    if (this.id_cuento == 0 || this.id_cuento == null) {
      this.form.get('id_lenguaje')?.patchValue(1);
      this.form.get('id_lenguaje')?.disable();
      this.listarCategorias(1);
      this.listarSubCategorias(1);
      this.listarTiposContenido(1);
      this.listarTiposContenidoCuento(1);
    }
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
    }
  }

  audioLibro(e: any){
    if (e.target.files.length > 0) {
      this.audio_cuento = e.target.files[0];
    }
  }

  videoCuento(e: any){
    if (e.target.files.length > 0) {
      this.video_cuento = e.target.files[0];
    }
  }

  getCuento(id: string) {
    this.cuentosSvc.listCuento(id).subscribe((data: any) => {
      this.model = data.data;
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
    frmCuento.append('id_cuento', this.id_cuento);
    frmCuento.append('texto', this.contenido);

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

    this.cuentosSvc.saveCuento(frmCuento).subscribe(data => {
        this.response(data)
    });
  }

  response(data: any) {
    Swal.fire({
      title: 'Éxito',
      icon: 'success',
      text: `Su registro ha sido creado satisfactoriamente!`
    })
    this.router.navigate(['/main/cuentos/list-cuentos'])
  }

}
