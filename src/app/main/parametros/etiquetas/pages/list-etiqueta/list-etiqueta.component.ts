import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtiquetaService } from '../../etiqueta.service';

@Component({
  selector: 'app-list-etiqueta',
  templateUrl: './list-etiqueta.component.html',
  styleUrls: ['./list-etiqueta.component.css']
})
export class ListEtiquetaComponent implements OnInit {

  etiquetas: any[] = [];

  constructor(private router: Router, private etiquetasSvc: EtiquetaService) { }

  ngOnInit() {
    this.listarEtiquetas()
  }

  listarEtiquetas() {
    this.etiquetasSvc.listEtiquetas().subscribe(
      (res: any) => {
        this.etiquetas = res.response;

      }
    );
  }

  updateEtiqueta(etiqueta: any) {
    this.router.navigate(['/main/parametros/form-etiqueta', {id: etiqueta.id}]);
  }

}
