import { Component, OnInit, Renderer2, ViewChild , NgZone} from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from '../../utils/services/login.service';
import { LoginObject } from "../../../modelo/login-object";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public sidebarMenuOpened = true;
  admin: LoginObject;
  @ViewChild('contentWrapper', { static: false }) contentWrapper;

  constructor(
    private renderer: Renderer2, 
    private cookies: CookieService, 
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private _admin: LoginService,
    ) {}

  ngOnInit() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
    this.renderer.removeClass(
      document.querySelector('app-root'),
      'register-page'
    );

      // console.log(localStorage.getItem('token'));
    this.afAuth.user.subscribe(user => {
      if (user) {
        this.ngZone.run(() => {
          this._admin.getByCorreo(user.email).subscribe(response => {
            response.docs.find(value => {
              const data = value.data();
              let datos: LoginObject = {
                correo: data.correo,
                nombre: data.nombre,
                admin: data.admin,
              };  
              this.admin = datos;    
              console.log(this.admin);                      
            });
          });
          this.router.navigate(['/dashboard']);
        });
      }else{
        this.ngZone.run(() => {
          this.router.navigate(['/login']);
        });
      }
    });
    
  }

  mainSidebarHeight(height) {
    // this.renderer.setStyle(
    //   this.contentWrapper.nativeElement,
    //   'min-height',
    //   height - 114 + 'px'
    // );
  }

  toggleMenuSidebar() {
    console.log('sidebarMenuCollapsed', this.sidebarMenuOpened);
    if (this.sidebarMenuOpened) {
      this.renderer.removeClass(
        document.querySelector('app-root'),
        'sidebar-open'
      );
      this.renderer.addClass(
        document.querySelector('app-root'),
        'sidebar-collapse'
      );
      this.sidebarMenuOpened = false;
    } else {
      this.renderer.removeClass(
        document.querySelector('app-root'),
        'sidebar-collapse'
      );
      this.renderer.addClass(
        document.querySelector('app-root'),
        'sidebar-open'
      );
      this.sidebarMenuOpened = true;
    }
  }
}
