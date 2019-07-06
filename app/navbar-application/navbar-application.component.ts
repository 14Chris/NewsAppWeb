import { Component, OnInit, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router, RouteReuseStrategy } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ApiService } from '../services/api.service';
import { User } from '../Models/User';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-application',
  templateUrl: './navbar-application.component.html',
  styleUrls: ['./navbar-application.component.scss']
})

export class NavbarApplicationComponent implements OnInit {
  @Input() search: string;
  @Input() user: User;
  searchIcon = faSearch;
  userIcon = faUser;
  newsIcon = faNewspaper;
  
  constructor(private router: Router, private api: ApiService, private auth: AuthenticationService) {}

  ngOnInit() {
  }

  SearchArticle() {
    let search: string;
    search = $('.article-search').val().toString();
    this.router.navigate(['articles/search', search]);
  }

  Logout(){
    this.auth.logout();
    location.href = "";
  }

}
