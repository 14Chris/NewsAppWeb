import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../Models/article';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { ApiService } from '../../shared/services/api.service';
import { ArticleUser } from '../../Models/article-user';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor(private api: ApiService, private auth: AuthenticationService) {}

  ngOnInit() {
  }

  ClickArticle(id) {
    if (this.auth.isLogged()) {
      console.log(id);
      let model = new ArticleUser();

      model.id_article = id;

      this.api.create('ArticleUser', JSON.stringify(model))
      .subscribe(res => {
        console.log('ok');
      },
        (error) => {
          console.log(error);
        });
    } else {
      console.log('no loggued');
    }
  }
}
