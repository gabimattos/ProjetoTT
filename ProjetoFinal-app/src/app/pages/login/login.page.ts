import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;



  constructor(public formBuilder: FormBuilder, private router: Router, public authService: AuthService) {
    this.loginForm =  this.formBuilder.group({
       email: [null, [Validators.required]],
       password: [null, [Validators.required]]
     });
   }

  ngOnInit() {
  }

  logarUsuario( loginForm ) {


    if ( loginForm.status == "VALID" ) {
      this.authService.loginUsuario( loginForm.value ).subscribe(
        (res) => {
          console.log( res );
          localStorage.setItem('userToken', res.success.token);
          localStorage.setItem('Usuario', JSON.stringify(res.success.user));
          this.router.navigate(['home-logado', {id:res.success.user.id}]);

        }
      );

    }

  }
  VaiproCadastro(){
     this.router.navigate(['/cadastro']);
  }

  VaipraHome(){
    this.router.navigate(['/home']);
  }



}
