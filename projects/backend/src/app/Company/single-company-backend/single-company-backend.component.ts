import { Component, OnInit, Input } from '@angular/core';
import { CompaniesBackendService } from '../../services/companies-backend.service';
import { ActivatedRoute } from '@angular/router';
import { CompaniesB } from '../companies-backend/companiesB';
import { Location } from '@angular/common'
import { ProductsB } from '../../Product/products-backend/productsB';


@Component({
  selector: 'app-single-company-backend',
  templateUrl: './single-company-backend.component.html',
  styleUrls: ['./single-company-backend.component.scss']
})
export class SingleCompanyBackendComponent implements OnInit {
  products : ProductsB[];
  @Input() company: CompaniesB;

  constructor(
    private route: ActivatedRoute,
    private CompaniesBackendService: CompaniesBackendService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCompany();
    this.getRelation();
  }

  getCompany() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.CompaniesBackendService.getCompany(id).subscribe(data => this.company = data);
  }

  getRelation() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.CompaniesBackendService.getRelation(id).subscribe(rela => this.products = rela);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.CompaniesBackendService.updateCompany(this.company, id ).subscribe(() => this.goBack());
  }

}
