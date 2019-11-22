import { Component, OnInit } from '@angular/core';
import { UsersBackendService } from 'projects/backend/src/app/services/users-backend.service';
import { CategoriesBackendService } from 'projects/backend/src/app/services/categories-backend.service';
import { CategoriesB } from 'projects/backend/src/app/Category/categories-backend/categoriesB';
import { SubCategoriesBackendService } from 'projects/backend/src/app/services/sub-categories-backend.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsB } from 'projects/backend/src/app/Product/products-backend/productsB';
import { count } from 'rxjs/operators';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  products : Array<object>= [];
  hide : true;
  categories : CategoriesB[];
  product : ProductsB;
  response : [];
  idInterest;
  Bool = false;
  constructor(
    private CategoriesService: CategoriesBackendService, 
    private subCategoriesBackendService : SubCategoriesBackendService,
    private userBackendService : UsersBackendService) { }

  ngOnInit() {
    this.getSubcategories();
    this.getInterests();
  }

  getSubProducts(id): void {
    this.subCategoriesBackendService.getSubCategoryProducts(id).subscribe(data => {this.product = data[0]});
  }

  getSubcategories(){
    this.CategoriesService.getCategories().subscribe(categories => this.categories = categories);
  }

  getInterests() {
    this.userBackendService.getUserSubCategoryProducts().then((data)=>{data.subscribe((products: Array<object>)=> this.products = products)});
  }


}
