import { ArticleModel } from './article.model';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {
  data = ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'];

  article!: ArticleModel;

  createInstance(titleInput: HTMLInputElement, linkInput: HTMLInputElement): void {
    this.article = new ArticleModel(titleInput.value, linkInput.value, 1);
    titleInput.value = '';
    linkInput.value = '';
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  get domain(): string {
    return this.article.domain();
  }
}
