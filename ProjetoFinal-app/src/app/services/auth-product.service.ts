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
      'Accept': 'application/json'
    }
  }

  cadastroProduto(form):Observable<any>{
    return this.http.post(this.apiURL + 'criaProduto', form, this.httpHeaders);
  }

  constructor(public http: HttpClient) { }
}
