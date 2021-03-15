import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { NonAuthGuard } from './utils/guards/non-auth.guard';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'profile',
        component: MainComponent,
      },
      {
        path: 'blank',
        component: MainComponent,
      },
      {
        path: 'configuracion',
        component: MainComponent,
      },
      {
        path: '404',
        component: MainComponent,
      },
      {
        path: 'ticket',
        component: MainComponent,
      },
      {
        path: 'gestioninventario',
        component: MainComponent,
      },
      {
        path: 'detalleinventario/:id',
        component: MainComponent,
      },
      {
        path: '',
        component: MainComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NonAuthGuard],
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
