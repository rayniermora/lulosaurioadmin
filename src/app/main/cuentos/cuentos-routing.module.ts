import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarCategoriasHijasComponent } from './pages/asignar-categorias-hijas/asignar-categorias-hijas.component';
import { AsignarEtiquetasComponent } from './pages/asignar-etiquetas/asignar-etiquetas.component';
import { EditCuentoComponent } from './pages/edit-cuento/edit-cuento.component';
import { FormCuentosComponent } from './pages/form-cuentos/form-cuentos.component';
import { ListCuentosComponent } from './pages/list-cuentos/list-cuentos.component';

const routes: Routes = [
  {
    path: '',
    component: ListCuentosComponent
  },
  {
    path: 'list-cuentos',
    component: ListCuentosComponent
  },
  {
    path: 'form-cuento/:id',
    component: FormCuentosComponent
  },
  {
    path: 'asignar-etiquetas',
    component: AsignarEtiquetasComponent
  },
  {
    path: 'asignar-categorias-hijas',
    component: AsignarCategoriasHijasComponent
  },
  {
    path: 'edit-cuento',
    component: EditCuentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentosRoutingModule { }
