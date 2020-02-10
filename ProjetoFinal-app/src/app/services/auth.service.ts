import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL:string = 'http://localhost:8000/api/';

  httpHeaders: any= {
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  cadastroUsuario(form):Observable<any>{
    return this.http.post(this.apiURL + 'registraUser', form, this.httpHeaders);
  }

  // cadastroVendedor(form):Observable<any>{
  //   return this.http.post(this.apiURL + 'registraUser', form, this.httpHeaders);
  // }

  loginUsuario(form):Observable<any>{
    return this.http.post(this.apiURL + 'loginUser', form, this.httpHeaders);
  }


    constructor(public http: HttpClient) { }
}
