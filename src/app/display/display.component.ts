import { Component, OnInit } from '@angular/core';
import { UsersBackendService } from 'projects/backend/src/app/services/users-backend.service';
import { CategoriesBackendService } from 'projects/backend/src/app/services/categories-backend.service';
import { CategoriesB } from 'projects/backend/src/app/Category/categories-backend/categoriesB';
import { SubCategoriesBackendService } from 'projects/backend/src/app/services/sub-categories-backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsB } from 'projects/backend/src/app/Product/products-backend/productsB';
import { count } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { UsersB } from 'projects/backend/src/app/User/users-backend/usersB';
import { SubcategoriesB } from 'projects/backend/src/app/SubCategory/sub-categories-backend/subcategoriesB';
import { CommentBackendService } from 'projects/backend/src/app/services/comment-backend.service';
import { CommentsB } from 'projects/backend/src/app/Product/products-backend/commentsB';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  products : Array<object>= [];
  hide : true;
  categories : CategoriesB[];
  subCategories : SubcategoriesB[];
  product : ProductsB;
  user: UsersB;
  comments: CommentsB[];
  constructor(
    private CategoriesService: CategoriesBackendService, 
    private subCategoriesBackendService : SubCategoriesBackendService,
    private userBackendService : UsersBackendService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private comment: CommentBackendService) { }

  ngOnInit() {
    this.getcategories();
    this.getInterests();
    this.getProfil();
  }

  getSubProducts(id): void {
    this.subCategoriesBackendService.getSubCategoryProducts(id).subscribe(data => {this.product = data[0], this.getComments(this.product.id)});
  }

  getcategories(){
    this.CategoriesService.getCategories().subscribe(categories => this.categories = categories);
  }

  getInterests() {
    this.userBackendService.getUserSubCategoryProducts().then((data)=>{data.subscribe((products: Array<object>)=>{
      this.products = products
      //@ts-ignore
      this.getComments(this.products[0].id)
    })});
    
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  getComments(id){
    this.comments = null;
    this.comment.getComments(id).subscribe(comments => this.comments = comments);
  }

  profil() {
      this.router.navigate(['/profil']);
  }

   getProfil() {
      this.userBackendService.getProfil().then((data)=>{data.subscribe(user => this.user = user)});
  }


}
