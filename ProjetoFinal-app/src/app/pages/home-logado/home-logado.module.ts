import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ProdutosComponent} from '../../components/produtos/produtos.component';
import {VendedoresComponent} from '../../components/vendedores/vendedores.component';
import { IonicModule } from '@ionic/angular';

import { HomeLogadoPageRoutingModule } from './home-logado-routing.module';

import { HomeLogadoPage } from './home-logado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeLogadoPageRoutingModule
  ],
  declarations: [HomeLogadoPage, ProdutosComponent, VendedoresComponent]
})
export class HomeLogadoPageModule {}
