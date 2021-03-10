import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesPage } from './articles.page';

const routes: Routes = [
    //Página de Erro404
  {
    path: '**',
    component: ArticlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesPageRoutingModule {}
