import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ProdutosPerfilComponent} from '../../components/produtos-perfil/produtos-perfil.component';
import { IonicModule } from '@ionic/angular';

import { PerfilVendedorPageRoutingModule } from './perfil-vendedor-routing.module';

import { PerfilVendedorPage } from './perfil-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilVendedorPageRoutingModule
  ],
  declarations: [PerfilVendedorPage, ProdutosPerfilComponent]
})
export class PerfilVendedorPageModule {}
