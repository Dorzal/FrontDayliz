import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authentication : AuthenticationService) { }

  ngOnInit() {
      this.redirect();
  }

  redirect (){
    const currentUser = this.authentication.currentUserValue;
    if(currentUser)
    {
      this.router.navigate(['/display']);
    }
  }
}
