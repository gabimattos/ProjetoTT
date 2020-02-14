import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.scss'],
})
export class VendedoresComponent implements OnInit {

  @Input() prodObj;
  constructor(public router: Router) {
  	
   }

saiDaqui(id) {
	this.router.navigate(['/perfil-vendedor', id]);
}
  ngOnInit() {
  }

}
