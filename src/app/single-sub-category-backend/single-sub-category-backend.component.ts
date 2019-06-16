import { Component, OnInit, Input } from '@angular/core';
import { SubCategoriesBackendService } from '../services/sub-categories-backend.service';
import { ActivatedRoute } from '@angular/router';
import { SubcategoriesB } from '../sub-categories-backend/subcategoriesB';
import { Location } from '@angular/common'


@Component({
  selector: 'app-single-sub-category-backend',
  templateUrl: './single-sub-category-backend.component.html',
  styleUrls: ['./single-sub-category-backend.component.scss']
})
export class SingleSubCategoryBackendComponent implements OnInit {
  @Input() subcategory: SubcategoriesB;

  constructor(
    private route: ActivatedRoute,
    private SubcategoriesBackendService: SubCategoriesBackendService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSubCategory();
  }

  getSubCategory() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.SubcategoriesBackendService.getSubCategory(id).subscribe(data => this.subcategory = data);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.SubcategoriesBackendService.updateSubCategory(this.subcategory, id ).subscribe(() => this.goBack());
  }
}
