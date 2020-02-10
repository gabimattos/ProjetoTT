import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroVendedorPage } from './cadastro-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroVendedorPageRoutingModule {}
