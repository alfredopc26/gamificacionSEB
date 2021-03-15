import { Component, OnInit, OnDestroy, Renderer2, NgZone } from '@angular/core';
import { AppService } from '../../utils/services/app.service';
import { ApiService } from '../../utils/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public isAuthLoading = false;
  errorMessage = '';
  constructor(
    private renderer: Renderer2,
    private appService: AppService,
    public apiService: ApiService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone 
  ) {}

  ngOnInit() {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    this.afAuth.user.subscribe(user => {
      if (user) {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
      }else{
        this.ngZone.run(() => {
          this.router.navigate(['/login']);
        });
      }
    });
  }

  login() {

    if (this.loginForm.valid) {

      this.afAuth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(() => {
        this.router.navigate(['/productos']);
      }).catch(response => {
        this.errorMessage = response.message;
      });
    } else {
      this.errorMessage = 'Por favor llene los datos en el formulario';
    }

  }

  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
  }
}
