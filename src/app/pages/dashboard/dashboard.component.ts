import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginObject } from "../../../modelo/login-object";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  admin: LoginObject;

  constructor(
    private afAuth: AngularFireAuth,

  ) { }

  ngOnInit(){

    this.afAuth.user.subscribe(user => {
      if (user) { 
       
      }else{
       

      }
    });

  }

}
