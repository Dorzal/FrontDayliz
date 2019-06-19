import { Component, OnInit } from '@angular/core';
import { UsersB } from './usersB';
import { UsersBackendService } from '../services/users-backend.service';
import { PremiumsBackendService } from '../services/premiums-backend.service';
import { PremiumsB } from '../premiums-backend/premiumsB';

@Component({
  selector: 'app-users-backend',
  templateUrl: './users-backend.component.html',
  styleUrls: ['./users-backend.component.scss']
})
export class UsersBackendComponent implements OnInit {

  users: UsersB[];
  premiums: PremiumsB[];
  constructor(private usersBackendService: UsersBackendService, private premiumsBackendService: PremiumsBackendService) { }

  ngOnInit() {
    this.getUsers();
    this.getPremiums();
  }

  getUsers(): void {
    this.usersBackendService.getUsers().subscribe(users => this.users = users);
  }

  getPremiums(): void {
    this.premiumsBackendService.getPremiums().subscribe(premium => this.premiums = premium);
  }
  
  delete(user: UsersB): void {
    this.users = this.users.filter(u => u !== user);
    this.usersBackendService.deleteUser(user).subscribe();
  }

  add(email: string, roles: any, password: string, birthday: string, lastName: string, firstName: string, avatar: string, premiumId: any): void {
    roles = [roles];
    premiumId = `/api/premia/${premiumId}`;
    this.usersBackendService.addUser({email, roles, password, birthday, lastName, firstName, avatar, premiumId} as UsersB).subscribe(user => {this.users.push(user)});
  }

}
