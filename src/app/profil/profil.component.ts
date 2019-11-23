import { Component, OnInit } from '@angular/core';
import { UsersBackendService } from 'projects/backend/src/app/services/users-backend.service';
import { UsersB } from 'projects/backend/src/app/User/users-backend/usersB';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  user : UsersB;
  constructor(private userBackendService : UsersBackendService, private location : Location, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.myProfil();
  }


  myProfil()
  {
    this.userBackendService.getProfil().then((data)=>{data.subscribe(user => this.user = user)});
  }

  goBack() {
    this.location.back();
  }

}
