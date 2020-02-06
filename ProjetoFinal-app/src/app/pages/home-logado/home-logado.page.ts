import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;

@Component({
  selector: 'app-home-logado',
  templateUrl: './home-logado.page.html',
  styleUrls: ['./home-logado.page.scss'],
})
export class HomeLogadoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  VaiproCarrinho(){
    this.router.navigate(['/carrinho']);
  }

  VaiproBuscar(){
    this.router.navigate(['/busca']);
  }

}
