import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {

  @Input() prodObj;

  constructor() { }

  ngOnInit() {}

  ionViewWillEnter(){
    console.log(this.prodObj);
  }
}
