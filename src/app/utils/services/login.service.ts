import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import firebase from "firebase/app";
import { LoginObject } from "../../../modelo/login-object";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private db: AngularFirestore) { }

  private CollectionName = 'admin';
  
  getByCorreo( correo: string ): Observable<firebase.firestore.QuerySnapshot> {
            
    return this.db.collection<LoginObject>(this.CollectionName, ref => ref.where('correo', '==', correo)).get();
    
  }


}