import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import {AuthService} from  '../services/auth.service';
import {AuthProductService} from '../services/auth-product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  vendedoreshome: any[];
  produtoshome: any[];
  userId;

  constructor(private router: Router, public authService: AuthService, public authProduct: AuthProductService) { }

  ngOnInit() {
    this.getDados();
    this.getSeller();
  }

  VaiproLogin(){
    this.router.navigate(['/login']);
  }

  getDados(){
  console.log(this.userId);
  this.authProduct.getProdutos().subscribe((res)=>{
    this.produtoshome = res[0];
    console.log(this.produtoshome);
  }, error=>{
    console.log(error);
  });
  }

  getSeller(){
  console.log(this.userId);
  this.authService.getSellers().subscribe((res)=>{
  console.log(res);
  this.vendedoreshome = res[0];
  console.log(this.vendedoreshome);
  }, error=>{
  console.log(error);
  });
  }



}
