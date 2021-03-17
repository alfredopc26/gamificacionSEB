import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http:HttpClient
  ) { }

  insertData(userData: Usuario): Observable<any> {
    return this.http.post<UsuarioService>("http://localhost:5000/insertData", JSON.stringify(userData));
  }
}
