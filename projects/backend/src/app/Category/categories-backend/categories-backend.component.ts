import { Component, OnInit } from '@angular/core';
import { CategoriesB } from './categoriesB';
import { CategoriesBackendService } from '../../services/categories-backend.service';
import { SubcategoriesB } from '../../SubCategory/sub-categories-backend/subcategoriesB';

@Component({
  selector: 'app-categories-backend',
  templateUrl: './categories-backend.component.html',
  styleUrls: ['./categories-backend.component.scss']
})
export class CategoriesBackendComponent implements OnInit {

  categories: CategoriesB[];
  constructor(private categoriesBackendService: CategoriesBackendService) { }
  pageActuel: number = 1;
  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesBackendService.getCategories().subscribe(categories => this.categories = categories)
  }
  
  delete(category: CategoriesB): void {
    this.categories = this.categories.filter(c => c !== category);
    this.categoriesBackendService.deleteCategory(category).subscribe();
  }

  add(name: string, logo: string): void {
    if (!name || !logo) { return;}
    this.categoriesBackendService.addCategory({name, logo} as CategoriesB).subscribe(company => {this.categories.push(company)});
  }

}
