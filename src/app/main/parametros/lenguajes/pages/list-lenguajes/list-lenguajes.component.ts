import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LenguajesService } from '../../lenguajes.service';

@Component({
  selector: 'app-list-lenguajes',
  templateUrl: './list-lenguajes.component.html',
  styleUrls: ['./list-lenguajes.component.css']
})
export class ListLenguajesComponent implements OnInit {

  lenguajes:any [] = [];

  constructor( private lenguajeSvc: LenguajesService, private router: Router ) { }

  ngOnInit() {
    this.listLenguajes();
  }

  listLenguajes() {
    this.lenguajeSvc.listLenguajes().subscribe(
      (res: any) => {
        this.lenguajes = res;
      }
    );
  }

  updateLenguaje(lenguajes: any){
    this.router.navigate(['/main/parametros/form-lenguajes', {id: lenguajes.id}]);
  }

  eliminarLenguaje(data:any) {
    Swal.fire({
      icon: 'question',
      title: 'Confirmar',
      text: 'Realmente deseas eliminar éste registro?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      reverseButtons: true
    }).then((res: any) => {
      if( res.isConfirmed ) {
        this.lenguajeSvc.eliminarLenguaje(data).subscribe(() => {
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
