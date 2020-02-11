import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from  '../../services/auth.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-perfil-vendedor',
  templateUrl: './perfil-vendedor.page.html',
  styleUrls: ['./perfil-vendedor.page.scss'],
})
export class PerfilVendedorPage implements OnInit {

    // dadosPerfil;
    // userId;
    typecompare: boolean = false;
    username;
    userplace;


  constructor(private activateroute: ActivatedRoute, private router: Router, public authService: AuthService) {

    let user = JSON.parse(localStorage.getItem('Usuario'));

    this.username=user.name;
    this.userplace=user.state;

    if(user.typeuser == 'true'){
      this.typecompare = true;
    }
  }




  VaipraHome(){
    this.router.navigate(['/home']);
  }

  VaipraCadastroProduto(){
    this.router.navigate(['/cadastro-produto']);
  }

//   getInformacoes(id){
//
//   this.authService.getUser(id).subscribe(
//     (res) => {
//       this.dadosPerfil=res;
//       console.log(this.dadosPerfil);
//       if(this.dadosPerfil.typeuser == 'true'){
//         this.typecompare = true;
//       }
//       this.username=this.dadosPerfil.name;
//       this.userplace=this.dadosPerfil.state;
//
//     }
//   );
//
// }
  ngOnInit() {


  }

}
