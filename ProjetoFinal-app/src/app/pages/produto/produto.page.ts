import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  constructor(private router: Router) { }

  VaipraHome(){
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
