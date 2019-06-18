import { Component, OnInit, Input } from '@angular/core';
import { CompaniesBackendService } from '../services/companies-backend.service';
import { ActivatedRoute } from '@angular/router';
import { CompaniesB } from '../companies-backend/companiesB';
import { Location } from '@angular/common'


@Component({
  selector: 'app-single-company-backend',
  templateUrl: './single-company-backend.component.html',
  styleUrls: ['./single-company-backend.component.scss']
})
export class SingleCompanyBackendComponent implements OnInit {
  @Input() company: CompaniesB;

  constructor(
    private route: ActivatedRoute,
    private CompaniesBackendService: CompaniesBackendService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.CompaniesBackendService.getCompany(id).subscribe(data => this.company = data);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.CompaniesBackendService.updateCompany(this.company, id ).subscribe(() => this.goBack());
  }
}
