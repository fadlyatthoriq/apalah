import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleModel } from './component/article/article.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Simple Reddit Clone';

  articles: ArticleModel[] = [
    new ArticleModel('Angular Tutorial', 'https://angular.io/tutorial', 15),
    new ArticleModel('TypeScript Handbook', 'https://www.typescriptlang.org/docs/', 8),
    new ArticleModel('RxJS Guide', 'https://rxjs.dev/guide/overview', 12),
  ];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new ArticleModel(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): ArticleModel[] {
    return [...this.articles].sort((a, b) => b.votes - a.votes);
  }
}
