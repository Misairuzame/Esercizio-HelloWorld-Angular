import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [{
  path: 'article-component',
  component: ArticleComponent
},
{
  path: 'counter-component',
  component: CounterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
