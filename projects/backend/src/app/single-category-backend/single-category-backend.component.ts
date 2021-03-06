import { Component, OnInit, Input } from '@angular/core';
import { CategoriesB } from '../categories-backend/categoriesB';
import { CategoriesBackendService } from '../services/categories-backend.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-category-backend',
  templateUrl: './single-category-backend.component.html',
  styleUrls: ['./single-category-backend.component.scss']
})
export class SingleCategoryBackendComponent implements OnInit {

  @Input() category: CategoriesB;

  constructor(
    private route: ActivatedRoute,
    private CategoriesBackendService: CategoriesBackendService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCatgory();
  }

  getCatgory() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.CategoriesBackendService.getCategory(id).subscribe(data => this.category = data);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.CategoriesBackendService.updateCategory(this.category, id ).subscribe(() => this.goBack());
  }

}
