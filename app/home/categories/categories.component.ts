import { Component, OnInit, NgZone, Input } from '@angular/core';
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
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';

declare var $: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: any;
  @Input() selectedCategory: any;

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
  faStar=faStar;
  faUserAlt=faUserAlt;
  faNewspaper=faNewspaper;

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute, private ngZone: NgZone, private catgService:CategoryService) 
  {}
  
  ngOnInit() {
    this.GetAllCategories();
    
    this.catgService.categorySelected.subscribe(
      value=>{
        this.ngZone.run(() => {
          this.selectedCategory = value;
        });
      }
    );
  }

  GetAllCategories() {
    this.api.getData('Category')
      .subscribe(res => {
        this.categories = res;
      },
        () => {
        });
  }

  // Click sur la catégorie dans la liste pour affichage des articles
  CategoryClick(event) {
    const target = $(event.srcElement).closest('mat-list-item');
    const idAttr = $(target).attr('id');

    //Change url and redirect to change category
    this.router.navigate(['articles/category/', idAttr]);
  }

  GetCategoryById(id) {
    this.api.getData('Category/' + id)
      .subscribe(res => {
        this.ngZone.run(() => {
          this.selectedCategory = res;
        });
      },
        (error) => {

        });
  }
}
