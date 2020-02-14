import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthProductService} from  '../../services/auth-product.service';
import { HomeLogadoPage } from '../home-logado/home-logado.page';
import { ToastController } from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

// public produto = {};

      compra;
      dadosProduto;
      productName;
      productPrice;
      productQuantity;
      productPhoto;
      productId;

  constructor(
    private actRoute: ActivatedRoute,
    private router:Router,
    public productService: AuthProductService,
    public toastController: ToastController,
    public authService: AuthService,
  ) {}

async presentToast() {

    const toast = await this.toastController.create({
      message: 'Sua compra foi realizada com sucesso!',
      duration: 2000
    });
    toast.present();
}

  getInformacoes(id){
    console.log(id)
  this.productService.getProduct(id).subscribe(
    (res) => {
      this.dadosProduto=res;
      console.log(this.dadosProduto);
      this.productPhoto=this.dadosProduto.photo;
      this.productName=this.dadosProduto.productName;
      this.productPrice=this.dadosProduto.price;
      this.productQuantity=this.dadosProduto.quantity;

    }
  );

}

Compra(id:number){

  this.authService.compraProduto(id).subscribe(
    (res)=> {

      this.VaipraHomeLogado();
      this.presentToast();

    });
}


VaipraHomeLogado(){
  this.router.navigate(['/home-logado']);
}

  ngOnInit() {
      let user = localStorage.getItem('userToken');

       this.productId = this.actRoute.snapshot.paramMap.get('id'); //pega id
       console.log(this.productId)
       this.getInformacoes(this.productId);

  }
  ionViewWillEnter(){

  }
}
