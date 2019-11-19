import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ProvaComponent } from './prova/prova.component';
import { CounterComponent } from './counter/counter.component';
import { HighlightDirective } from './highlight.directive';
import { HighlightbuttonDirective } from './highlightbutton.directive';
import { SondaggioComponent } from './sondaggio/sondaggio.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ProvaComponent,
    CounterComponent,
    HighlightDirective,
    HighlightbuttonDirective,
    SondaggioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
