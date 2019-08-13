import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesModule } from './templates/templates.module';
import { UserModule } from './modules/user/user.module';
import { EvaluadorModule } from './modules/evaluador/evaluador.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TemplatesModule,
    UserModule,
    EvaluadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
