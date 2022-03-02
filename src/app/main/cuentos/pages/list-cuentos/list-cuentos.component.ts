import { Component, OnInit } from '@angular/core';
import { CuentosService } from '../cuentos.service';

@Component({
  selector: 'app-list-cuentos',
  templateUrl: './list-cuentos.component.html',
  styleUrls: ['./list-cuentos.component.css']
})
export class ListCuentosComponent implements OnInit {

  constructor( private cuentosSvc: CuentosService ) { }

  cuentos:any [] = [];

  ngOnInit(): void {
    this.listCuentos();
  }

  listCuentos() {
    this.cuentosSvc.listCuentos().subscribe(
      (res: any) => {
        console.log(res);
        this.cuentos = res;

      }
    );
  }



}
