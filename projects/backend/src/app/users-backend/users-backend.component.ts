import { Component, OnInit } from '@angular/core';
import { UsersB } from './usersB';
import { UsersBackendService } from '../services/users-backend.service';

@Component({
  selector: 'app-users-backend',
  templateUrl: './users-backend.component.html',
  styleUrls: ['./users-backend.component.scss']
})
export class UsersBackendComponent implements OnInit {

  users: UsersB[];
  constructor(private usersBackendService: UsersBackendService) { }
  pageActuel: number = 1;
  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersBackendService.getUsers().subscribe(users => this.users = users);
  }
  
  delete(user: UsersB): void {
    this.users = this.users.filter(u => u !== user);
    this.usersBackendService.deleteUser(user).subscribe();
  }

  add(email: string, roles: any, password: string, birthday: string, lastName: string, firstName: string, avatar: string): void {
    roles = [roles];
    this.usersBackendService.addUser({email, roles, password, birthday, lastName, firstName, avatar} as UsersB).subscribe(user => {this.users.push(user)});
  }

}
