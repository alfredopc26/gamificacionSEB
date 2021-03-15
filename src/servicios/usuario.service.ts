import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { Menu } from '../modelo/menu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http:HttpClient ) { }
  
  private url = "http://172.16.2.2:81/ibesweb_new/webservice/ibesweb4/usuario.ws.php?";
  getUser(id: string){
    return this.http.get<Usuario[]>(this.url+'accion=getById&user='+id);
  }

  updateUser(usuario: Usuario){
    return this.http.post<Usuario[]>(this.url+'accion=updateUsuario',JSON.stringify(usuario));
  }

  getMenu(id: string){
    return this.http.get<Menu[]>(this.url+'accion=getMenuByUser&user='+id);
  }

  getModuloUser(id, user){
    return this.http.get<Menu[]>(this.url+'accion=getModulosByuser&user='+user+'&dependencia='+id);
  }

  updateModuloUser(data: any): Observable<any> {
    return this.http.post(this.url+'accion=changeStatusModule', JSON.stringify(data));
  }
}
