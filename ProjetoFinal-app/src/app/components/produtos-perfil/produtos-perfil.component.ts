import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produtos-perfil',
  templateUrl: './produtos-perfil.component.html',
  styleUrls: ['./produtos-perfil.component.scss'],
})
export class ProdutosPerfilComponent implements OnInit {

  @Input() produto;

  constructor() { }

  ngOnInit() {}

  ionViewWillEnter(){
    console.log(this.produto);
  }

}
