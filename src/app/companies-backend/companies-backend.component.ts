import { Component, OnInit, Input } from '@angular/core';
import { CompaniesBackendService } from '../services/companies-backend.service';
import { CompaniesB } from './companiesB';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-companies-backend',
  templateUrl: './companies-backend.component.html',
  styleUrls: ['./companies-backend.component.scss']
})
export class CompaniesBackendComponent implements OnInit {

  companies$: CompaniesB[];
  constructor(private companiesBackendService: CompaniesBackendService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.listConpanies();
  }

  listConpanies() {
    return this.companiesBackendService.listCompanies().subscribe(data => this.companies$ = data)
  }
  

}
