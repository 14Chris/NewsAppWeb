import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { Category } from '../../Models/category';
import { CategoryService } from '../../shared/services/category.service';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  
  connectedUser: any;
  articles:any;

  constructor(private api: ApiService, private ngZone: NgZone, private route: ActivatedRoute, private catgService: CategoryService) {
    
    this.catgService.UpdateSelectedCategory(new Category(-3, 'Favoris')); 

    //Si un utilisateur est connecté
    if (localStorage.getItem('TokenInfo') != null) {
      this.api.getData('User').subscribe(res => {
        if (res) {
          this.ngZone.run(() => {
            this.connectedUser = res;
          });

          
          this.GetFavoritesArticles(20);
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
  
  GetFavoritesArticles(nb) {
    //Si connecté à l'application
    //if()

    this.api.getData('Article/favorite/' + nb)
      .subscribe(res => {
        console.log(res);
        this.articles = res;
      },
        (error) => {
          console.log(error);
        });
  }

}
