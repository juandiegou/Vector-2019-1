import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorHomeComponent } from './editor-home/editor-home.component';
import { EditorSectionGuard } from 'src/app/guards/editor-section.guard';


const routes: Routes = [
  {
    path: 'editor/home',
    component: EditorHomeComponent,
    canActivate: [
      EditorSectionGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
