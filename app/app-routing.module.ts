import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FavoritesComponent } from './user/favorites/favorites.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptor } from './Interceptor/http-interceptor';
import { ErrorInterceptor } from './Interceptor/error-interceptor';
import { AddLinkComponent } from './administrator/add-link/add-link.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo:'/articles', pathMatch:'full'},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'links/add', component: AddLinkComponent },
  { path: 'reset_password/:token', component: ResetPasswordComponent }



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true }
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
