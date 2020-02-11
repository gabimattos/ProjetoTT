import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthProductService } from '../../services/auth-product.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  registerProdutoForm: FormGroup;

  constructor(public formbuilder:FormBuilder, private router: Router, public authproductService: AuthProductService) {
  this.registerProdutoForm = this.formbuilder.group({
    productName: [null, [Validators.required, Validators.minLength(3)]],
    quantity:[null, [Validators.required]],
    price: [null, [Validators.required]],
    description:[null],

  });

}
 VaiproPerfil(){
   this.router.navigate(['/perfil-vendedor']);
 }

registrarProduto(form){

  this.authproductService.cadastroProduto( form.value ).subscribe(
    (res) => {
      console.log(res);
      console.log( res.message );
      this.router.navigate(['perfil-vendedor']);
    }
  );
}

submitForm(form){
  console.log(form);
  console.log(form.value);
}

  ngOnInit() {
  }

}
