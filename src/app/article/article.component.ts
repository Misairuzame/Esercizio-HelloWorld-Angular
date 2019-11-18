import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, article {
  author: string;
  title: string;
  content: string;

  constructor() {
    this.author = "Bruh Moment";
    this.title = "AngularJS";
    this.content = "Creazione del primo componente angular";
  }

  ngOnInit() {
  }
}


interface article {
  author: string;
  title: string;
  content: string;
}