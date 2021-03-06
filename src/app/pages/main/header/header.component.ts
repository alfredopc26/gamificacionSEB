import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from 'src/app/utils/services/app.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginObject } from "../../../../modelo/login-object";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() admin: LoginObject;
  @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();
  public searchForm: FormGroup;

  constructor(
    private appService: AppService,
    private afAuth: AngularFireAuth,
    private router: Router
    ) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl(null),
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }
}
