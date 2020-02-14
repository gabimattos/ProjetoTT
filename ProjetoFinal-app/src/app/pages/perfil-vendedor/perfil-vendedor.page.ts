import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    userToken;
    user;

  constructor(private actRoute: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    public authProduct: AuthProductService
  ) {
    this.userToken = localStorage.getItem('userToken');
    this.userId = this.actRoute.snapshot.paramMap.get('id');
    // this.user = JSON.parse(localStorage.getItem('Usuario'));
    // this.userId = user.id;
    // this.username = user.name;
    // this.userplace = user.state;


    // if(user.typeuser == 'true'){
    //   this.typecompare = true;
    //}
  }

  VaipraHomeLogado(){
    this.router.navigate(['/home-logado']);
  }


  VaipraCadastroProduto(){
    this.router.navigate(['/cadastro-produto']);
  }

  ngOnInit() {
    //console.log(this.user);
    this.getDados();

    console.log(this.userId);

  }

   getDados(){
   console.log(this.userId);
   this.authProduct.listaProdutos(this.userId).subscribe(
     (res)=>{
     console.log(res);

     this.usuario = res;
     this.produtos = this.usuario.products;
     console.log(this.produtos);

    }, error=>{
      console.log(error);

    });
  }
}
