import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorHomeComponent } from './editor-home/editor-home.component';


@NgModule({
  declarations: [EditorHomeComponent],
  imports: [
    CommonModule,
    EditorRoutingModule
  ], exports: [
    EditorHomeComponent
  ]
})
export class EditorModule { }
