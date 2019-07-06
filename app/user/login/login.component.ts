import { Component, OnInit, Inject } from '@angular/core';
import { Login } from '../../Models/login';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ErrorDialog } from '../../dialog-error/dialog-error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean;
  model = new Login();
  hide: boolean;
  constructor(private auth: AuthenticationService, private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    this.isLoading = false;
    this.hide = true;
  }

  onSubmit() {
    this.isLoading = true;
    this.auth.login(this.model.login, this.model.password).then(() => {
      this.isLoading = false;
      this.router.navigate(['']);
    })
    //Catch de l'erreur de login
    .catch(error => {
      this.isLoading = false;
      //Non autorisé

      let msg="";

      if(error.error.status == "401"){
 
        msg="L'identifiant ou le mot de passe est incorrect";
      }
      else{
        msg = "Erreur lors de l'authentification s'est produite";
        //Affichage d'un popup affichant l'erreur
      }
      let dialogRef = this.dialog.open(ErrorDialog, {
        data: { name: msg },
      });

      });
    };
}
