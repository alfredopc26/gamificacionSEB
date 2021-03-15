import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { AppService } from '../../utils/services/app.service';
import { ApiService } from '../../utils/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public isAuthLoading = false;
  
  constructor(
    private renderer: Renderer2,
    private toastr: ToastrService,
    private appService: AppService,
    public apiService: ApiService
  ) {}

  ngOnInit() {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
    this.loginForm = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  login() {

    if (this.loginForm.valid) {

      this.apiService.login(this.loginForm.value).subscribe( data => {
         
         if(data.error){
          this.toastr.error('Ha ocurrio un error', 'Usuario y/o contraseña Incorrecta');
         }else{
           this.apiService.setToken(data.usuario);
           this.appService.login();
          console.log(data);
         }
       
      });
    } else {
      this.toastr.error('Hello world!', 'Toastr fun!');
    }

  }

  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
  }
}
