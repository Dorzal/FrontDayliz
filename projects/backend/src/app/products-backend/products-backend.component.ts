import { Component, OnInit } from '@angular/core';
import { ProductsB } from './productsB';
import { ProductsBackendService } from '../services/products-backend.service';

@Component({
  selector: 'app-products-backend',
  templateUrl: './products-backend.component.html',
  styleUrls: ['./products-backend.component.scss']
})
export class ProductsBackendComponent implements OnInit {

  products: ProductsB[];
  constructor(private productsBackendService: ProductsBackendService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productsBackendService.getProducts().subscribe(products => this.products = products)
  }
  
  delete(product: ProductsB): void {
    this.products = this.products.filter(p => p !== product);
    this.productsBackendService.deleteProduct(product).subscribe();
  }

  add(name: string, description: string, price: string, website: string, picture: string, date: string): void {
    
    this.productsBackendService.addProduct({name, description, price, website, picture, date} as ProductsB).subscribe(product => {this.products.push(product)});
  }
}
