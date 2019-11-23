import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriesB } from 'projects/backend/src/app/Category/categories-backend/categoriesB';
import { CategoriesBackendService } from 'projects/backend/src/app/services/categories-backend.service';
import { AuthenticationService } from '../services/authentication.service';
import { UsersBackendService } from 'projects/backend/src/app/services/users-backend.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  selectedValues: {name: string, id: number}[] = [];
  @Output() toggle = new EventEmitter<any[]>();
  categories: CategoriesB[];
  constructor(private router :Router ,private CategoriesBackendService: CategoriesBackendService, private AuthenticationService : AuthenticationService, private UserBackendService: UsersBackendService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.CategoriesBackendService.getCategories().subscribe(categories => this.categories = categories)
  }

  patchInterest(): void {
    let interest = this.selectedValues.map(s => `/api/sub_categories/${s.id}`)
    this.UserBackendService.patchInterest(interest);
    this.router.navigate(['/display']);
  }

  onToggle(sub : any) {
    
    if(this.selectedValues.find(data => data.id == sub.id) == null){
      this.selectedValues.push(sub);
    }else{
      this.selectedValues = this.selectedValues.filter(s => sub.id != s.id)
    }
    console.log(this.selectedValues);
    
  }

  



}