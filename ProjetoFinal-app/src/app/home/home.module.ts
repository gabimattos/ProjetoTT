import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {ProdutosHomeComponent} from '../components/produtos-home/produtos-home.component';
import {VendedoresHomeComponent} from '../components/vendedores-home/vendedores-home.component';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ProdutosHomeComponent, VendedoresHomeComponent]
})
export class HomePageModule {

}
