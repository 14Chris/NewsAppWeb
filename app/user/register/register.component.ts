import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidator } from '../../custom-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoading: boolean;
  registerForm: any;
  hidePassword: boolean;
  hideRepeatPassword: boolean;

  constructor(private api: ApiService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.isLoading = false;
    this.hidePassword = true;
    this.hideRepeatPassword = true;

    this.registerForm = this.fb.group(
      {
        nom: [null, Validators.compose([
          Validators.required])
        ],
        prenom: [null, Validators.compose([
          Validators.required])
        ],
        email: [null, Validators.compose([])
        ],
        login: [null, Validators.compose([Validators.required])
        ],
        password: [null, Validators.compose([
          // 1. Password Field is Required
          Validators.required,
          // // 2. check whether the entered password has a number
          CustomValidator.patternValidator(/\d/, { hasNumber: true }),
          // // 3. check whether the entered password has upper case letter
          CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          // // 4. check whether the entered password has a lower-case letter
          CustomValidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
          // // 5. check whether the entered password has a special character
          //CustomValidator.patternValidator(/[ [!@#$%^&*()_+-=[]{};':"|,.<>/ ?] /](<mailto: !@#$ %^&* ()_ +-=[]{ }; ':"|,.<>/?]/>), { hasSpecialCharacters: true }),
          // 6. Has a minimum length of 8 characters
          Validators.minLength(8)])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]

      },
      {
        // check whether our password and confirm password match
        validator: CustomValidator.passwordMatchValidator
      });
  }


  onSubmit() {
    this.isLoading = true;
    let promise = new Promise((resolve, reject) => {
      this.api.create("User", this.fb).toPromise()
        .then(
          res => {
            console.log(res);
            //login successful if there's a jwt token in the response
            if (res) {
              //store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('TokenInfo', JSON.stringify(res));
            }
            resolve();
          },
          error => {
            console.error(error);
            reject(error);
          });

    });

    promise.then(() => {
      this.isLoading = false;
      this.router.navigate(['']);
    })
      //Catch de l'erreur de login
      .catch(error => {
      });
  }
}
