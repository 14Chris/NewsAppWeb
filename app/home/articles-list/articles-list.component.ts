import { Component, OnInit, NgZone, Input, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../Models/category';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})

export class ArticlesListComponent implements OnInit {
  articles: any;
  selectedCategory: any;

  // Icones pour les categories
  faEuroSign = faEuroSign;
  faGlobe = faGlobeEurope;
  faVolleyballBall = faVolleyballBall;
  faVoteYea = faVoteYea;
  faMapMarkerAlt = faMapMarkerAlt;
  faHeartbeat = faHeartbeat;
  faFlask = faFlask;
  faMicrochip = faMicrochip;
  faFilm = faFilm;
  faStar = faStar;
  faUserAlt = faUserAlt;
  faNewspaper = faNewspaper;

  constructor(private api: ApiService, private ngZone: NgZone, private route: ActivatedRoute, private catgService:CategoryService) {
    this.articles = [];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params.id;
      let searchTerm = params.search;

      if (id && id != -1) {
        this.GetCategoryById(id);
        this.GetArticlesFromCategory(id,20);
      }
      else if (searchTerm) {
        this.ngZone.run(() => {
          this.GetAllArticlesFromSearch(searchTerm,20);
          this.catgService.UpdateSelectedCategory(new Category(-1, 'A la une')); 
        });
      }
      else{
        this.GetArticles(20);
        this.catgService.UpdateSelectedCategory(new Category(-1, 'A la une')); 
      }
    });
  }

  GetArticles(nb) {
    this.api.getData('Article/' + nb)
      .subscribe(res => {
        this.articles = res;
      },
        (error) => {
          console.log(error);
        });
  }

  GetArticlesFromCategory(id, nb) {
    this.api.getData('Article/category/' + id + '/' + nb)
      .subscribe(res => {
        this.ngZone.run(() => {
          this.articles = res;
        });
      },
        (error) => {
          console.log(error);
        }
      );

  }

  GetAllArticlesFromSearch(search, nb) {
    console.log("search2");
    this.api.getData('Article/search/' + search + '/' + nb)
      .subscribe(res => {
        this.ngZone.run(() => {
          this.articles = res;
        });
      },
        (error) => {
          console.log(error);
        }
      );
  }

  GetCategoryById(id) {
    this.api.getData('Category/' + id)
      .subscribe(res => {
        this.catgService.UpdateSelectedCategory(res); 
        this.ngZone.run(() => {
          this.selectedCategory = res;
        });
       
      },
        (error) => {
          console.log(error);
        });
  }


  
}
