import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserModule } from './user.module';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { FormLoginGuard } from 'src/app/guards/form-login.guard';
import { UrlInjectionGuard } from 'src/app/guards/url-injection.guard';


const routes: Routes = [
  {
    path:"user/login",
    
    component: LoginComponent,
    canActivate: [
      FormLoginGuard
    ]
  },
  {
    path:"user/logout",
    component: LogoutComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path:"user/register",
    component: RegisterComponent,
    canActivate: [
      FormLoginGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule, UserModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
