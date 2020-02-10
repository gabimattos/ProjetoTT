import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-vendedor',
  templateUrl: './perfil-vendedor.page.html',
  styleUrls: ['./perfil-vendedor.page.scss'],
})
export class PerfilVendedorPage implements OnInit {

    // name: string;
    // email: string;
    // state:string;
    // typeuser: boolean;
    //
    //

    dadosPerfil;

  constructor(private router: Router) {

    this.dadosPerfil= {

      'name': 'Gabriela Mattos',
      'email': "gabi@gmail.com",
      'state': "Acre",
      'typeuser': true,


    };

}




  VaipraHome(){
    this.router.navigate(['/home']);
  }

  VaipraCadastroProduto(){
    this.router.navigate(['/cadastro-produto']);
  }

  ngOnInit() {
  }

}
