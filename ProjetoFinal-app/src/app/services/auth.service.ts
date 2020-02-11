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



  loginUsuario(form):Observable<any>{
    return this.http.post(this.apiURL + 'loginUser', form, this.httpHeaders);
  }

  logoutUser(): Observable<any> {

        this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');

        console.log(this.httpHeaders);

        return this.http.get(this.apiURL + 'logoutUser', this.httpHeaders);

    }

    getUser(id: any): Observable<any> {
        return this.http.get(this.apiURL + 'userProdutos/' + id);
    }


    constructor(public http: HttpClient) { }
    estaLogado(){
      return localStorage.getItem('userToken');
    }
}
