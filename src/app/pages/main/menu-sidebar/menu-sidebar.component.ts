import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
  Renderer2,
  Input
} from '@angular/core';
import { AppService } from 'src/app/utils/services/app.service';
import { UsuarioService } from '../../../../servicios/usuario.service';
import { Menu } from '../../../../modelo/menu';
import { CookieService } from "ngx-cookie-service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginObject } from "../../../../modelo/login-object";

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit, AfterViewInit {
  usuario: any;
  menus: Menu[];
  id: string;

  
  @Input() admin: LoginObject;
  @ViewChild('mainSidebar', { static: false }) mainSidebar;
  @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    public appService: AppService,
    public apiService: UsuarioService,
    private cookies: CookieService,
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2,
    ) {
        this.id = this.cookies.get("userId");
    }

  ngOnInit() {
    console.log(this.admin);
  }

  ngAfterViewInit() {
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
  }


  rutaLink(opcion){

    let ruta = opcion ? opcion.ruta : '404';
    // Pass along the item id if available
    // so that the HeroList component can select that item.
    this.router.navigate([ruta]);

  }

}