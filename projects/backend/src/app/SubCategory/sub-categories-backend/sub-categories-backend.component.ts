import { Component, OnInit, Input } from '@angular/core';
import { SubCategoriesBackendService } from '../../services/sub-categories-backend.service';
import { SubcategoriesB } from './subcategoriesB';
import { CategoriesB } from '../../Category/categories-backend/categoriesB';
import { CategoriesBackendService } from '../../services/categories-backend.service';



@Component({
  selector: 'app-sub-categories-backend',
  templateUrl: './sub-categories-backend.component.html',
  styleUrls: ['./sub-categories-backend.component.scss']
})
export class SubCategoriesBackendComponent implements OnInit {

  subcategories: SubcategoriesB[];
  categories: CategoriesB[];
  constructor(private subCategoriesBackendService: SubCategoriesBackendService, private categoriesBackendService: CategoriesBackendService) { }
pageActuel: number = 1;
  ngOnInit() {
    this.getSubCategories();
    this.getCategories();
  }

  getSubCategories(): void {
    this.subCategoriesBackendService.getSubCategories().subscribe(subcategories => this.subcategories = subcategories)
  }

  getCategories(): void {
    this.categoriesBackendService.getCategories().subscribe(categories => this.categories = categories);
  }
  
  delete(subCategory: SubcategoriesB): void {
    this.subcategories = this.subcategories.filter(c => c !== subCategory);
    this.subCategoriesBackendService.deleteSubCategory(subCategory).subscribe();
  }

  add(name: string, logo: string, category:any): void {
    if (!name || !logo) { return;}
    category = `/api/categories/${category}`
    this.subCategoriesBackendService.addSubCategory({name, logo, category} as SubcategoriesB).subscribe(subcategory => {this.subcategories.push(subcategory)});
  }
}
