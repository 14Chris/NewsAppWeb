import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { Category } from '../../Models/category';
import { CategoryService } from '../../shared/services/category.service';

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.scss']
})
export class ForYouComponent implements OnInit {

  connectedUser: any;
  articles: any;

  constructor(private api: ApiService, private ngZone: NgZone, private route: ActivatedRoute, private catgService: CategoryService) {
    this.catgService.UpdateSelectedCategory(new Category(-2, 'ForYou'));

    //Si l'utilisateur est connecté
    if (localStorage.getItem('TokenInfo') != null) {
      this.api.getData('User').subscribe(res => {
        if (res) {
          this.ngZone.run(() => {
            this.connectedUser = res;
          });


          this.GetArticlesProposal();
          console.log(this.articles);
        }

      },
        (error) => {
          console.log(error);
        });

    }

  }

  ngOnInit() {
  }

  GetArticlesProposal() {
    this.api.getData('Article/recommend/')
      .subscribe(res => {
        if (res) {
          this.ngZone.run(() => {
            this.articles = res;
          });

        }

      },
        (error) => {
          console.log(error);
        });
  }

}
