import { Component, OnInit } from '@angular/core';
import { CategoriesB } from './categoriesB';
import { CategoriesBackendService } from '../services/categories-backend.service';

@Component({
  selector: 'app-categories-backend',
  templateUrl: './categories-backend.component.html',
  styleUrls: ['./categories-backend.component.scss']
})
export class CategoriesBackendComponent implements OnInit {

  categories$: CategoriesB[];
  constructor(private companiesBackendService: CategoriesBackendService) { }

  ngOnInit() {
    return this.companiesBackendService.listCategories().subscribe(data => this.categories$ = data)
  }

}
