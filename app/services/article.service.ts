import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor(private api: ApiService, private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  GetArticles(nb):any {
    let result: any;

    this.api.getData('Article/'+nb)
      .subscribe(res => {
        return res;
      },
        (error) => {
          console.log(error);
        })
  }

  GetArticlesFromCategory(id,nb):any{
    let result: any;
    this.api.getData('Article/category/' + id+'/'+nb)
      .subscribe(res => {
       return res;
      },
        (error) => {
          console.log(error);
        }
      );

  }

}