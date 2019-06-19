import { Component, OnInit } from '@angular/core';
import { ProductsB } from './productsB';
import { ProductsBackendService } from '../services/products-backend.service';
import { SubCategoriesBackendService } from '../services/sub-categories-backend.service';
import { SubcategoriesB } from '../sub-categories-backend/subcategoriesB';
import { CompaniesB } from '../companies-backend/companiesB';
import { CompaniesBackendService } from '../services/companies-backend.service';

@Component({
  selector: 'app-products-backend',
  templateUrl: './products-backend.component.html',
  styleUrls: ['./products-backend.component.scss']
})
export class ProductsBackendComponent implements OnInit {

  products: ProductsB[];
  subCategories: SubcategoriesB[];
  companies: CompaniesB[];
  constructor(private productsBackendService: ProductsBackendService, private subCategoriesBackendService: SubCategoriesBackendService, private companiesBackendService: CompaniesBackendService) { }

  ngOnInit() {
    this.getProducts();
    this.getSubCategories();
    this.getCompanies();
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
  
  delete(product: ProductsB): void {
    this.products = this.products.filter(p => p !== product);
    this.productsBackendService.deleteProduct(product).subscribe();
  }

  add(name: string, description: string, price: string, website: string, picture: string, date: string, subcategoryId:any, companyId:any): void {
    subcategoryId = `/api/sub_categories/${subcategoryId}`;
    companyId = `/api/companies/${companyId}`;
    this.productsBackendService.addProduct({name, description, price, website, picture, date, subcategoryId, companyId} as ProductsB).subscribe(product => {this.products.push(product)});
  }
}
