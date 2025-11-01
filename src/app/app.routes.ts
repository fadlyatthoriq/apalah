import { Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world-component/hello-world-component';
import { Article } from './component/article/article';

export const routes: Routes = [
  {
    path: '',
    component: Article,
  },
];
