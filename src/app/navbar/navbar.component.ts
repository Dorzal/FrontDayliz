import { Component, OnInit } from '@angular/core';
import { Categories } from './categories';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categories: Categories[];
  constructor(private NavbarService: NavbarService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.NavbarService.getCategories().subscribe(categories => this.categories = categories)
  }

}
