import { Component, OnInit } from '@angular/core';
import { SubCategoriesBackendService } from 'projects/backend/src/app/services/sub-categories-backend.service';
import { SubcategoriesB } from 'projects/backend/src/app/SubCategory/sub-categories-backend/subcategoriesB';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  subcategories: SubcategoriesB[];

  constructor(private subCategoriesBackendService: SubCategoriesBackendService) { }

  ngOnInit() {
    this.getSubCategories();
  }

  getSubCategories(): void {
    this.subCategoriesBackendService.getSubCategories().subscribe(subcategories => this.subcategories = subcategories)
  }

}
