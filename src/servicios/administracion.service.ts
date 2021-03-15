import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor( private http:HttpClient ) { }

  private url = "http://172.16.2.2:81/ibesweb_new/webservice/ibesweb4/administracion.api.php?";
  getDepartamentos(){
    return this.http.get(this.url+'accion=getDepartmentsAll');
  }
  getUserByDep(departamento: string){
    return this.http.get(this.url+'accion=getUserByDep&departamento='+ departamento);
  }
  getCargoDep(departamento: string){
    return this.http.get(this.url+'accion=getCargoDep&departamento='+ departamento);
  }
  getDependencias(){
    return this.http.get(this.url+'accion=getDependencia');
  }
  getModulos(dependencia: string){
    return this.http.get(this.url+'accion=getModulos&dependencia='+dependencia);
  }
  updateModulo(data: any): Observable<any> {
    return this.http.post(this.url+'accion=updateModulo', JSON.stringify(data));
  }
  updateOpcion(data: any): Observable<any> {
    return this.http.post(this.url+'accion=updateOpcion', JSON.stringify(data));
  }
  // getModulo(moduloID){
  //   return this.http.get(this.url+'accion=getModulo&modulo='+moduloID);
  // }

}
