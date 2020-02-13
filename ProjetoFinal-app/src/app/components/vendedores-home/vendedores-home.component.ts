import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vendedores-home',
  templateUrl: './vendedores-home.component.html',
  styleUrls: ['./vendedores-home.component.scss'],
})
export class VendedoresHomeComponent implements OnInit {

  @Input() vendedoresHome;

  constructor() { }

  ngOnInit() {}

}
