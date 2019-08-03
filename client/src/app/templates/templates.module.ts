import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [NavbarComponent, HeroComponent, FooterComponent, PageNotFoundComponent, HomeComponent],
  imports: [
    CommonModule
  ], exports: [
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    PageNotFoundComponent
  ]
})
export class TemplatesModule { }
