import { Component, OnInit, Input } from '@angular/core';
import { CompaniesBackendService } from '../../services/companies-backend.service';
import { CompaniesB } from './companiesB';



@Component({
  selector: 'app-companies-backend',
  templateUrl: './companies-backend.component.html',
  styleUrls: ['./companies-backend.component.scss']
})
export class CompaniesBackendComponent implements OnInit {

  companies: CompaniesB[];
  constructor(private companiesBackendService: CompaniesBackendService) { }

  pageActuel: number = 1;
  


  ngOnInit() {
    this.getConpanies();
  }

  getConpanies(): void {
    this.companiesBackendService.getCompanies().subscribe(companies => this.companies = companies)
  }
  
  delete(company: CompaniesB): void {
    this.companies = this.companies.filter(c => c !== company);
    this.companiesBackendService.deleteCompany(company).subscribe();
  }

  add(name: string, logo: string, url: string): void {
    if (!name || !logo) { return;}
    this.companiesBackendService.addCompany({name, logo, url} as CompaniesB).subscribe(company => {this.companies.push(company)});
  }
}
