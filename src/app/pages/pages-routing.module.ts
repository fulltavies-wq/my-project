import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './sections/main-page/main-page.component';
import { PagesComponent } from './pages.component';
import { NewsPageComponent } from '../@theme/components/menu/components/news-page/news-page.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'mainPage',
        component: MainPageComponent,
      },
      {
        path:'news',
        component: NewsPageComponent,
      },
      {
        path: 'administration',
         loadChildren: () => import('../modules/administration/administration.module').then(module => module.AdministrationModule)
      },
    ]
  },   
  {
    path: '',
    redirectTo: 'mainPage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }