import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder, private router: Router, public authService: AuthService) {
    this.registerForm=this.formbuilder.group({
        name:[null, [Validators.required, Validators.minLength(3)]],
        email:[null, [Validators.required, Validators.email]],
        password:[null, [Validators.required, Validators.minLength(6)]],
        state: [null],
        typeuser:[null, [Validators.required]]

      });

    }

  VaipraHome(){
    this.router.navigate(['/home']);
  }

  VaiproLogin(){
    this.router.navigate(['/login']);
  }

  VaiproCadastroVendedor(){
    this.router.navigate(['/cadastro-vendedor']);
  }

  registrarUsuario( registerForm ) {



    if ( registerForm.status == "VALID" ) {
      console.log(registerForm);
      this.authService.cadastroUsuario( registerForm.value ).subscribe(
        (res) => {
          console.log(res);
          console.log( res.message );
          this.router.navigate(['login']);
        }
      );

    }

  }

  submitForm(form){
      console.log(form);
      console.log(form.value);
  }

  ngOnInit() {
  }

  

}
