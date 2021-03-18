import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  ElementRef,
  Renderer2,
  Input
} from '@angular/core';
import { AppService } from 'src/app/utils/services/app.service';
import { UsuarioService } from '../../../../../servicios/usuario.service';
import { Usuario } from '../../../../../modelo/usuario';
import { CookieService } from "ngx-cookie-service";
import { LoginObject } from "../.././../../../modelo/login-object";
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dropdown-menu',
  templateUrl: './user-dropdown-menu.component.html',
  styleUrls: ['./user-dropdown-menu.component.scss'],
})
export class UserDropdownMenuComponent implements OnInit {
  public user;
  usuario: any;
  id: string;

  @Input() admin: LoginObject;
  @ViewChild('dropdownMenu', { static: false }) dropdownMenu;
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.hideDropdownMenu();
    }
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private appService: AppService,
    public apiService: UsuarioService,
    private cookies: CookieService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.id = this.cookies.get("userId");
  }

  ngOnInit(): void {
  }

  toggleDropdownMenu() {
    if (this.dropdownMenu.nativeElement.classList.contains('show')) {
      this.hideDropdownMenu();
    } else {
      this.showDropdownMenu();
    }
  }

  showDropdownMenu() {
    this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
  }

  hideDropdownMenu() {
    this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }
}
