import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule  } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.loginForm =  this.formBuilder.group({
       email: ['', Validators.required],
       password: ['', Validators.required]
     });
   }

  ngOnInit() {
  }

}
