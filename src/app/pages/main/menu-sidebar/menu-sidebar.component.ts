import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
  Renderer2
} from '@angular/core';
import { AppService } from 'src/app/utils/services/app.service';
import { UsuarioService } from '../../../../servicios/usuario.service';
import { Usuario } from '../../../../modelo/usuario';
import { Menu } from '../../../../modelo/menu';
import { CookieService } from "ngx-cookie-service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit, AfterViewInit {
  usuario: any;
  menus: Menu[];
  id: string;

  

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

   
    this.obtenerUser(this.id);
    this.obtenerMenu(this.id);
    console.log();
  }

  ngAfterViewInit() {
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
  }

  obtenerUser(id){

    this.apiService.getUser(id).subscribe( ( data: Usuario[] ) => {
      this.usuario = data;
      console.log(this.usuario);
      });
  
  }

obtenerMenu(id){

  this.apiService.getMenu(id).subscribe( ( data: Menu[] ) => {
    this.menus = data;
    console.log(this.menus);
});
}

  rutaLink(opcion){

    let ruta = opcion ? opcion.ruta : '404';
    // Pass along the item id if available
    // so that the HeroList component can select that item.
    this.router.navigate([ruta]);

  }

}