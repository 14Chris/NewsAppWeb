import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ArticlesListComponent } from './home/articles-list/articles-list.component';
import { ArticleComponent } from './home/article/article.component';
import { MatCardModule } from '@angular/material/card';
import { EnvironmentUrlService } from './services/environment-url.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './home/categories/categories.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as $ from 'jquery';
import { ArticleService } from './services/article.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavbarApplicationComponent } from './navbar-application/navbar-application.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { AddLinkComponent } from './administrator/add-link/add-link.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthenticationService } from './services/authentication.service';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatDialogModule} from '@angular/material/dialog';
import { ErrorDialog } from './dialog-error/dialog-error';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { FavoritesComponent } from './user/favorites/favorites.component';
import { HomeModule } from './home/home.module';
import { ForYouComponent } from './user/for-you/for-you.component';
import { CategoryService } from './services/category.service';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesListComponent,
    ArticleComponent,
    CategoriesComponent,
    NavbarApplicationComponent,
    AddLinkComponent,
    LoginComponent,
    RegisterComponent,
    ErrorDialog,
    FavoritesComponent,
    ForYouComponent,
    ResetPasswordComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    FontAwesomeModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [EnvironmentUrlService, ApiService, ArticlesListComponent, ArticleService, AuthenticationService, CategoryService],
  bootstrap: [AppComponent],
  entryComponents: [ErrorDialog]
})
export class AppModule {}
