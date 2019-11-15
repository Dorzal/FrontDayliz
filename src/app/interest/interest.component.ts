import { Component, OnInit } from '@angular/core';
import { CategoriesB } from 'projects/backend/src/app/Category/categories-backend/categoriesB';
import { CategoriesBackendService } from 'projects/backend/src/app/services/categories-backend.service';
import { AuthenticationService } from '../services/authentication.service';
import { UsersBackendService } from 'projects/backend/src/app/services/users-backend.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  categories: CategoriesB[];
  data;

  constructor(private CategoriesBackendService: CategoriesBackendService, private AuthenticationService : AuthenticationService, private user: UsersBackendService) { }

  ngOnInit() {
    //this.getSubCategories();
    console.log(this.whoImA());
    
  }

  getSubCategories(): void {
    this.CategoriesBackendService.getCategories().subscribe(categories => this.categories = categories)
  }

  whoImA(){
    this.user.know().subscribe(data =>this.data = data)
    console.log(this.data);
  }



}
