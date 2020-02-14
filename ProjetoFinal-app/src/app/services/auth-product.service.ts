import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthProductService {

  apiURL:string = 'http://localhost:8000/api/';

  httpHeaders: any= {
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '
    }
  }

  cadastroProduto(form):Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.put(this.apiURL + 'criaProduto', form, this.httpHeaders);
  }

  retornaInformacoes(id):Observable<any>{
    return this.http.get(this.apiURL + 'criaProduto/' +id, this.httpHeaders);
  }

  getProduct(id: any): Observable<any> {
      return this.http.get(this.apiURL + 'mostraProduto/' + id, this.httpHeaders);
  }

//lista os produtos do meu usuario
  listaProdutos(id): Observable<any> {
      return this.http.get(this.apiURL + 'ProdutosUsuario/' + id);
  }

//lista todos os produtos
  getProdutos(): Observable<any> {
      return this.http.get(this.apiURL + 'listaTodosProdutos');
  }



  constructor(public http: HttpClient) { }
}
