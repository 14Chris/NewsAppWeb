import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CustomValidator } from '../../custom-validator';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  isLoading: boolean;
  registerForm: any;
  hidePassword: boolean;
  hideRepeatPassword: boolean;
  token: any;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {

  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.token = params.token;
    });

    console.log(this.token);

    if (!this.token) {
      this.router.navigate(['/login']);
    }

    this.isLoading = false;
    this.hidePassword = true;
    this.hideRepeatPassword = true;

    this.registerForm = this.fb.group(
      {
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
      this.api.create("User/reset_password", {"token":this.token, "newPassword":this.registerForm.value.password}).toPromise()
        .then(
          res => {
            console.log(res);

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
