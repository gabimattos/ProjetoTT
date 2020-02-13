import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import {AuthService} from  '../../services/auth.service';
import {AuthProductService} from '../../services/auth-product.service';
import {ActivatedRoute} from '@angular/router;'



@Component({
  selector: 'app-home-logado',
  templateUrl: './home-logado.page.html',
  styleUrls: ['./home-logado.page.scss'],
})
export class HomeLogadoPage implements OnInit {

  // public produtos = [];

  produtos;
  bla: any[];
  vendedores: any[];
  userId;
  username;
  userplace;

  constructor( private router: Router, public authService: AuthService, public authProduct: AuthProductService) {


    let user = JSON.parse(localStorage.getItem('Usuario'));

    this.userId = user.id;
    this.username=user.name;
    this.userplace=user.state;
  }

  ngOnInit() {
    this.getDados();
    this.getSeller();
  }

  getDados(){
  console.log(this.userId);
  this.authProduct.getProdutos().subscribe((res)=>{
    this.bla = res;
    console.log(this.bla);
  }, error=>{
    console.log(error);
  });
}

getSeller(){
console.log(this.userId);
this.authService.getSellers().subscribe((res)=>{
  console.log(res);
  this.vendedores = res[0];
  console.log(this.vendedores);
}, error=>{
  console.log(error);
});
}

public ProdutoSelecionado(id){
  this.router.navigate(['/produto', {Produtoid: id}]);
}
}
