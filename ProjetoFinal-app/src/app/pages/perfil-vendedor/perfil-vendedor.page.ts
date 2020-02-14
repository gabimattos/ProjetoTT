import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from  '../../services/auth.service';
import {AuthProductService} from '../../services/auth-product.service';



@Component({
  selector: 'app-perfil-vendedor',
  templateUrl: './perfil-vendedor.page.html',
  styleUrls: ['./perfil-vendedor.page.scss'],
})
export class PerfilVendedorPage implements OnInit {

    usuario;
    produtos: any[];
    userId;
    typecompare: boolean = false;
    username;
    userplace;


  constructor(private router: Router, public authService: AuthService, public authProduct: AuthProductService) {

    let user = JSON.parse(localStorage.getItem('Usuario'));

    this.userId = user.id;
    this.username=user.name;
    this.userplace=user.state;


    if(user.typeuser == 'true'){
      this.typecompare = true;
    }
  }

  VaipraHomeLogado(){
    this.router.navigate(['/home-logado']);
  }

  VaipraCadastroProduto(){
    this.router.navigate(['/cadastro-produto']);
  }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.getDados();
  }

  getDados(){
    console.log(this.userId);
    this.authProduct.listaProdutos(this.userId).subscribe((res)=>{
    this.produtos = res[0];
    console.log(res[0]);

    }, error=>{
      console.log(error);

    });
  }
}
