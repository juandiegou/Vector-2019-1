import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-home',
  templateUrl: './editor-home.component.html',
  styleUrls: ['./editor-home.component.css']
})
export class EditorHomeComponent implements OnInit {

  editores =["pepe perez"];
  evaluadores= ["donald trump"];
  
  constructor() { }

  ngOnInit() {
    

  }



}
