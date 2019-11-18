import { Component, OnInit } from '@angular/core';
import { UsersB } from './usersB';
import { UsersBackendService } from '../../services/users-backend.service';

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
    this.check();
  }

  getUsers(): void {
    this.usersBackendService.getUsers().subscribe(users => this.users = users);
  }
  
  delete(user: UsersB): void {
    this.users = this.users.filter(u => u !== user);
    this.usersBackendService.deleteUser(user).subscribe();
  }

  check() {
    this.usersBackendService.checkInterest();
  }

}
