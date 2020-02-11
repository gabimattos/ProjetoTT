import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import {AuthService} from  '../../services/auth.service';
import {AuthProductService} from '../../services/auth-product.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-logado',
  templateUrl: './home-logado.page.html',
  styleUrls: ['./home-logado.page.scss'],
})
export class HomeLogadoPage implements OnInit {

  // public produtos = [];

  dadosPerfil;
  username;
  userplace;

  constructor(private activateroute: ActivatedRoute, private router: Router, public authService: AuthService) {
    // this.getInformacoes(this.activateroute.snapshot.params["id"]);

    let user = JSON.parse(localStorage.getItem('Usuario'));

    this.username=user.name;
    this.userplace=user.state;
  }

  ngOnInit() {
  }

  getInformacoes(id){

  this.authService.getUser(id).subscribe(
    (res) => {
      this.dadosPerfil=res;
      console.log(this.dadosPerfil);

      this.username=this.dadosPerfil.name;
      this.userplace=this.dadosPerfil.state;

    }
  );

}

  public ProdutoSelecionado(id){
    this.router.navigate(['/produto', {Produtoid: id}]);

  }

  VaiproCarrinho(){
    this.router.navigate(['/carrinho']);
  }

  VaiproBuscar(){
    this.router.navigate(['/busca']);
  }

}
