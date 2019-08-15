import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/article.model';
import { ArticleService } from '../../../services/article.service';
import { UserModel } from '../../../models/user.model';
import { EvaluatorService } from 'src/app/services/evaluator.service';

import { AuthorService } from '../../../services/author.service';

@Component({
  selector: 'app-editor-home',
  templateUrl: './editor-home.component.html',
  styleUrls: ['./editor-home.component.css']
})
export class EditorHomeComponent implements OnInit {

  articulos: ArticleModel[] = [];
  evaluadores: UserModel[]= [];
  autores: UserModel[]= [];
  nombre:string ="";
  constructor(private servicio : ArticleService,private evaluatorservice : EvaluatorService ,private authorService : AuthorService) { }

  ngOnInit() {
    this.getArticles();
    this.getEvaluadores();
    this.getAuthors();
  }


  getArticles():void{
    this.servicio.getAllArticles().subscribe(items => {
      this.articulos = items;
    });
    console.log(this.articulos);
  }

  getEvaluadores():void{
    this.evaluatorservice.getAllEvaluators().subscribe(items =>{
      this.evaluadores=items;
    });
    console.log(this.evaluadores);
    }

 
  getAuthors():void{
    this.authorService.getAllAuthors().subscribe(items =>{
      this.autores=items;
    });
    console.log(this.autores);
    }


    asignarEvaluador(i){
      console.log(i);
    }


}
