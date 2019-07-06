import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import { ApiService } from './api.service';
import {Category} from '../Models/category'
import { Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
    categorySelected: BehaviorSubject<Category> = new BehaviorSubject<Category>(new Category());

    constructor() { }

    UpdateSelectedCategory(category){
        this.categorySelected.next(category);
    }
}