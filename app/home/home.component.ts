import { Component, OnInit, NgZone, NgModule } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  selectedCategory: any;
  search: any;
  connectedUser: any;
  articles: any;

  constructor(private api: ApiService, private ngZone: NgZone, private route: ActivatedRoute) { 
    //Si un utilisateur est connecté
    if (localStorage.getItem('TokenInfo') != null) {
      this.api.getData('User').subscribe(res => {
        if (res) {
          this.ngZone.run(() => {
            this.connectedUser = res;
          });
        }

      },
        (error) => {
          console.log(error);
        });
    }

  }

  ngOnInit() {}

  
}
