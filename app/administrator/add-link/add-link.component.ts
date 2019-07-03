import { Component, OnInit } from '@angular/core';
import { Link } from '../../Models/link';
import { Category } from '../../Models/category';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent implements OnInit {

  model = new Link();
  categories: any;
  sources: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getData("Category")
      .subscribe(res => {
        this.categories = res;
      },
        (error) => {
          console.log(error);
        });

        this.api.getData("Source")
        .subscribe(res => {
          this.sources = res;
        },
          (error) => {
            console.log(error);
          });
  }

  OnSubmit() {
    this.api.create("Link", this.model)
      .subscribe(res => {

      },
        (error) => {
          console.log(error);
        });
  }

}
