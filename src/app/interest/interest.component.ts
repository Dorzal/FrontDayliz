import { Component, OnInit } from '@angular/core';
import { CategoriesB } from 'projects/backend/src/app/Category/categories-backend/categoriesB';
import { CategoriesBackendService } from 'projects/backend/src/app/services/categories-backend.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  categories: CategoriesB[];

  constructor(private CategoriesBackendService: CategoriesBackendService, private AuthenticationService : AuthenticationService) { }

  ngOnInit() {
    this.getSubCategories();
  }

  getSubCategories(): void {
    this.CategoriesBackendService.getCategories().subscribe(categories => this.categories = categories)
  }

  



}
