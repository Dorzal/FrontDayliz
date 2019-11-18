import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriesB } from 'projects/backend/src/app/Category/categories-backend/categoriesB';
import { CategoriesBackendService } from 'projects/backend/src/app/services/categories-backend.service';
import { AuthenticationService } from '../services/authentication.service';
import { UsersBackendService } from 'projects/backend/src/app/services/users-backend.service';
import { UsersB } from 'projects/backend/src/app/User/users-backend/usersB';


@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  selectedValues: {name: string, id: number}[] = [];
  @Output() toggle = new EventEmitter<any[]>();
  categories: CategoriesB[];
  constructor(private CategoriesBackendService: CategoriesBackendService, private AuthenticationService : AuthenticationService, private UserBackendService: UsersBackendService) { }

  ngOnInit() {
    this.getSubCategories();
  }

  getSubCategories(): void {
    this.CategoriesBackendService.getCategories().subscribe(categories => this.categories = categories)
  }

  patchInterest(): void {
    let interest = this.selectedValues.map(s => `/api/sub_categories/${s.id}`)
    this.UserBackendService.patchInterest(interest);
  }

  onToggle(sub : any) {
    
    this.selectedValues.push(sub);
  }



}
