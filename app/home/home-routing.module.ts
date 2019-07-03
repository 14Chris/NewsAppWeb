import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FavoritesComponent } from '../user/favorites/favorites.component';
import{ArticlesListComponent } from './articles-list/articles-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptor } from '../Interceptor/http-interceptor';
import { ForYouComponent } from '../user/for-you/for-you.component';


const routes: Routes = [
  {path:'articles', component : HomeComponent, 
  children:[
    { path: '', component: ArticlesListComponent },
    { path: 'category/:id', component: ArticlesListComponent },
    { path: 'search/:search', component: ArticlesListComponent  },
    { path: 'favorites', component: FavoritesComponent  },
    { path: 'foryou', component:ForYouComponent  }
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true }
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
