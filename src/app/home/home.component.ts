import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { UsersBackendService } from 'projects/backend/src/app/services/users-backend.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private authentication : AuthenticationService,
    private alertService: AlertService,
    private userBackendService: UsersBackendService) { }

  ngOnInit() {
      this.redirect();
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  redirect (){
    const currentUser = this.authentication.currentUserValue;
    if(currentUser)
    {
      this.router.navigate(['/display']);
    }
  }


  get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authentication.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.userBackendService.checkInterest().then((data)=>{data.subscribe((datas: Array<object>) => {
                        var role = this.userBackendService.knowRole();
                        if(role[0] == "ROLE_ADMIN")
                        {
                            this.router.navigate(['backend']);
                        }else {
                            if (datas.length == 0 ){
                                this.router.navigate(['interest']);
                            }else {
                                this.router.navigate(['display']);
                            }
                        }
                    })});  
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
