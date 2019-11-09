import { Component, OnInit, Input } from '@angular/core';
import { ProductsB } from '../products-backend/productsB';
import { ActivatedRoute } from '@angular/router';
import { ProductsBackendService } from '../../services/products-backend.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-products-backend',
  templateUrl: './single-products-backend.component.html',
  styleUrls: ['./single-products-backend.component.scss']
})
export class SingleProductsBackendComponent implements OnInit {

  @Input() product: ProductsB;

  constructor(
    private route: ActivatedRoute,
    private ProductsBackendService: ProductsBackendService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ProductsBackendService.getProduct(id).subscribe(data => this.product = data);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ProductsBackendService.updateProduct(this.product, id ).subscribe(() => this.goBack());
  }

}
