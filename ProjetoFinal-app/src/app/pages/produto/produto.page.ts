import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthProductService} from  '../../services/auth-product.service';
// import {ActivateRoute} from '@angular/router';
import {HomeLogadoPage} from '../home-logado/home-logado.page';

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


  constructor(private router:Router, public productService: AuthProductService) {

        this.getInformacoes(8);
        // this.Produtoid=this.router.snapshot.params["Produtoid"];
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

VaipraHome(){
  this.router.navigate(['/home']);
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
