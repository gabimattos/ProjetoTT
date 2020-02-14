import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from  '../../services/auth.service';
import {AuthProductService} from '../../services/auth-product.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-home-logado',
  templateUrl: './home-logado.page.html',
  styleUrls: ['./home-logado.page.scss'],
})
export class HomeLogadoPage implements OnInit {

  // public produtos = [];

  produtos;
  vendedores: any[];
  userId;
  username;
  userplace;

  constructor(private actRoute: ActivatedRoute, private router: Router, public authService: AuthService, public authProduct: AuthProductService) {


    let user = JSON.parse(localStorage.getItem('Usuario'));

    this.userId = user.id;
    this.username=user.name;
    this.userplace=user.state;
  }

  vaiProPerfilVendedor(id){
    this.router.navigate(['/perfil-vendedor', id]);
  }


  ngOnInit() {

  }

  ionViewWillEnter(){
    this.getDados();
    this.getSeller();
    console.log(vaiProPerfilVendedor(id));
  }

  getDados(){
  console.log(this.userId);
  this.authProduct.getProdutos().subscribe((res)=>{
    this.produtos = res[0];
    console.log(res);
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

}
