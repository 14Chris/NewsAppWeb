import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private api: ApiService, private envUrl: EnvironmentUrlService) { }

  login(login: string, password: string) {
    const promise = new Promise((resolve, reject) => {
      this.api.create('login', { login, password })
        .toPromise()
        .then(
          res => {
          console.log(res);
          // login successful if there's a jwt token in the response
          if (res) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('TokenInfo', JSON.stringify(res));
          }
          resolve();
        },
        error => {
          console.error(error);
          reject(error);
        });
    });
    return promise;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('TokenInfo');
  }

  isLogged() {
    if (localStorage.getItem('TokenInfo')) {
      return true;
    }
    return false;
  }
}
