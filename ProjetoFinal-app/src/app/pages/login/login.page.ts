import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;



  constructor(public formBuilder: FormBuilder, public router: Router) {
    this.loginForm =  this.formBuilder.group({
       email: ['email', Validators.required],
       password: ['password', Validators.required]
     });
   }

  ngOnInit() {
  }

  logarUsuario(form){
    console.log(form);
   
  }
  goToCadastro(){
     this.router.navigate(['/cadastro']);
  }
  botaoVoltar(){
    this.router.navigate(['/home']);
  }

}
