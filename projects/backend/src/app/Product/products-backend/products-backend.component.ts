import { Component, OnInit } from '@angular/core';
import { ProductsB } from './productsB';
import { ProductsBackendService } from '../../services/products-backend.service';
import { SubCategoriesBackendService } from '../../services/sub-categories-backend.service';
import { SubcategoriesB } from '../../SubCategory/sub-categories-backend/subcategoriesB';
import { CompaniesB } from '../../Company/companies-backend/companiesB';
import { CompaniesBackendService } from '../../services/companies-backend.service';
import { PromotionsBackendService } from '../../services/promotions-backend.service';
import { PromotionsB } from '../../Promotion/promotions-backend/promotionsB';

@Component({
  selector: 'app-products-backend',
  templateUrl: './products-backend.component.html',
  styleUrls: ['./products-backend.component.scss']
})
export class ProductsBackendComponent implements OnInit {

  products: ProductsB[];
  subCategories: SubcategoriesB[];
  companies: CompaniesB[];
  promotions: PromotionsB[];
  constructor(private productsBackendService: ProductsBackendService, 
    private subCategoriesBackendService: SubCategoriesBackendService,
    private companiesBackendService: CompaniesBackendService,
    private promotionsBackendService: PromotionsBackendService) { }

  ngOnInit() {
    this.getProducts();
    this.getSubCategories();
    this.getCompanies();
    this.getPromotions();
  }

  getProducts(): void {
    this.productsBackendService.getProducts().subscribe(products => this.products = products);
  }

  getSubCategories() : void {
    this.subCategoriesBackendService.getSubCategories().subscribe(sub => this.subCategories = sub);
  }

  getCompanies(): void {
    this.companiesBackendService.getCompanies().subscribe(comp => this.companies = comp);
  }

  getPromotions(): void {
    this.promotionsBackendService.getPromotions().subscribe(promo => this.promotions = promo);
  }
  
  delete(product: ProductsB): void {
    this.products = this.products.filter(p => p !== product);
    this.productsBackendService.deleteProduct(product).subscribe();
  }
  
  /*
  add(name: string, description: string, price: string, url: string, picture: string, showAt: any, subcategory:string, mark:string, promotion: string): void {
    subcategory = `/api/sub_categories/${subcategory}`;
    mark = `/api/marks/${mark}`;
    promotion = `/api/promotions/${promotion}`;
    if(showAt.length == 0) {
      showAt = null;
    }
    this.productsBackendService.addProduct({name, description, price, url, picture, showAt, subcategory, mark} as ProductsB).subscribe(product => {this.products.push(product)});
  }
  */
}
