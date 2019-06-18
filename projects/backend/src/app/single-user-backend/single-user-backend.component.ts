import { Component, OnInit, Input } from '@angular/core';
import { UsersB } from '../users-backend/usersB';
import { ActivatedRoute } from '@angular/router';
import { UsersBackendService } from '../services/users-backend.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-user-backend',
  templateUrl: './single-user-backend.component.html',
  styleUrls: ['./single-user-backend.component.scss']
})
export class SingleUserBackendComponent implements OnInit {

  @Input() user: UsersB;

  constructor(
    private route: ActivatedRoute,
    private UsersBackendService: UsersBackendService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.UsersBackendService.getUser(id).subscribe(data => this.user = data);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.UsersBackendService.updateUser(this.user, id ).subscribe(() => this.goBack());
  }

}
