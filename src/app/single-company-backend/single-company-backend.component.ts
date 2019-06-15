import { Component, OnInit } from '@angular/core';
import { CompaniesBackendService } from '../services/companies-backend.service';
import { ActivatedRoute } from '@angular/router';
import { CompaniesB } from '../companies-backend/companiesB';

@Component({
  selector: 'app-single-company-backend',
  templateUrl: './single-company-backend.component.html',
  styleUrls: ['./single-company-backend.component.scss']
})
export class SingleCompanyBackendComponent implements OnInit {
  CompaniesB: CompaniesB[];
  singleCompany$: CompaniesB;
  constructor(private companiesBackendService: CompaniesBackendService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params["company['id']"];
    this.singleCompany$ = undefined;
    return this.companiesBackendService.getCompanyById(id)
    .subscribe(data => this.CompaniesB = data);
    
  }

}
