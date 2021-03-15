import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginObject } from '../../../modelo/login-object';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  constructor( private http:HttpClient, private cookies: CookieService ) { }

  login(login: LoginObject): Observable<any> {
    return this.http.post<ApiService>("http://172.16.2.2:81/ibesweb_new/webservice/ibesweb4/auth.api.php?accion=auth", JSON.stringify(login));
  }
  setToken(userId: string) {
    this.cookies.set("userId", userId);
  }
  getToken() {
    return this.cookies.get("userId");
  }
 
}
