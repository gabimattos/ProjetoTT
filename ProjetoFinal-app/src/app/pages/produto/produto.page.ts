import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthProductService} from  '../../services/auth-product.service';
import { HomeLogadoPage } from '../home-logado/home-logado.page';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

// public produto = {};

      dadosProduto;
      productName;
      productPrice;
      productQuantity;


  constructor(private router:Router, public productService: AuthProductService, public toastController: ToastController) {}

async presentToast() {

    const toast = await this.toastController.create({
      message: 'Sua compra foi realizada com sucesso!',
      duration: 2000
    });
    toast.present();
}

  getInformacoes(id){

  this.productService.getProduct(id).subscribe(
    (res) => {
      this.dadosProduto=res;
      console.log(this.dadosProduto);

      this.productName=this.dadosProduto.productName;
      this.productPrice=this.dadosProduto.price;
      this.productQuantity=this.dadosProduto.quantity;

    }
  );

}


VaipraHomeLogado(){
  this.router.navigate(['/home-logado']);
}

  ngOnInit() {

  //   this.productService.mostraProduto(this.Produtoid).subscribe(
  //     (res) => {
  //       console.log(res[0]);
  //       this.produto = res[0];
  //     }
  //   );
  // }

  }
}
