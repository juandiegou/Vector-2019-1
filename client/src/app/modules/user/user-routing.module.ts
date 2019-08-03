import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserModule } from './user.module';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path:"user/login",
    component: LoginComponent
  },
  {
    path:"user/register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule, UserModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
