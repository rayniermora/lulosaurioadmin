import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCategoriasComponent } from './componentes/listar-categorias/listar-categorias.component';

const routes: Routes = [
  {

      path: '',
      redirectTo: 'listarcategorias',
      pathMatch: 'full'

  },
  {
    path: 'listarcategorias',
    component: ListarCategoriasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
