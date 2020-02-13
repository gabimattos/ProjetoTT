import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produtos-home',
  templateUrl: './produtos-home.component.html',
  styleUrls: ['./produtos-home.component.scss'],
})
export class ProdutosHomeComponent implements OnInit {

  @Input() prodHome;

  constructor() { }

  ngOnInit() {}

  ionViewWillEnter(){
    console.log(this.prodHome);
  }
}
