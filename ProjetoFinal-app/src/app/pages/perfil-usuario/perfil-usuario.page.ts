import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  botaoVoltarHome(){
  	this.router.navigate(['/home-logado']);
  }
  pegarInfoLogin(){
  	
  }
}
