import { Component, OnInit, Input } from '@angular/core';
import { SubCategoriesBackendService } from '../services/sub-categories-backend.service';
import { SubcategoriesB } from './subcategoriesB';



@Component({
  selector: 'app-sub-categories-backend',
  templateUrl: './sub-categories-backend.component.html',
  styleUrls: ['./sub-categories-backend.component.scss']
})
export class SubCategoriesBackendComponent implements OnInit {

  subcategories: SubcategoriesB[];
  constructor(private subCategoriesBackendService: SubCategoriesBackendService) { }

  ngOnInit() {
    this.getSubCategories();
  }

  getSubCategories(): void {
    this.subCategoriesBackendService.getSubCategories().subscribe(subcategories => this.subcategories = subcategories)
  }
  
  delete(subCategory: SubcategoriesB): void {
    this.subcategories = this.subcategories.filter(c => c !== subCategory);
    this.subCategoriesBackendService.deleteSubCategory(subCategory).subscribe();
  }

  add(name: string, logo: string): void {
    if (!name || !logo) { return;}
    this.subCategoriesBackendService.addSubCategory({name, logo} as SubcategoriesB).subscribe(subcategory => {this.subcategories.push(subcategory)});
  }
}
