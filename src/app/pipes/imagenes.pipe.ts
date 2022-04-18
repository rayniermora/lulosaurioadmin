import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  constructor(){}

  transform(img: any, tipo: any): any {
    console.log(img);

    if (!img) {
      return '/assets/img/saurio.png'
    }

    let url = environment.link;
      switch (tipo) {
      case 'alumno':
      return url + 'img/fotos_alumnos/' + img;
      break;
      case 'docente':
      return url + 'img/fotos_docentes/' + img;
      break;
      default:
        return '/assets/img/saurio.png'
      break;
    }

    return url;
    }
}
