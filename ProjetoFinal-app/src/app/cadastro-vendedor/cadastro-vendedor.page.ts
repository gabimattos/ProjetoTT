import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cadastro-vendedor',
  templateUrl: './cadastro-vendedor.page.html',
  styleUrls: ['./cadastro-vendedor.page.scss'],
})
export class CadastroVendedorPage implements OnInit {

registerVendedorForm:FormGroup;

  constructor(private router: Router, public formbuilder: FormBuilder) {

    this.registerVendedorForm=this.formbuilder.group({
      comercialName:[null, [Validators.required, Validators.minLength(3)]],
      cnpj:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],
      password:[null, [Validators.required, Validators.minLength(6)]],    
      description:[null],
    });
  }

  VaiproCadastro(){
    this.router.navigate(['/cadastro']);
  }

  VaiproLogin(){
    this.router.navigate(['/login']);
  }

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  // registrarVendedor( registerVendedorForm ) {
  //
  //
  //   if ( registerVendedorForm.status == "VALID" ) {
  //     this.authService.cadastroUsuario( registerForm.value ).subscribe(
  //       (res) => {
  //         console.log( res.message );
  //         this.router.navigate(['login']);
  //       }
  //     );
  //
  //   }
  //
  // }

  ngOnInit() {
  }

}
