import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login.service';
import { LayoutService } from '../side-bar/layout.service';
import { Body } from '@angular/http/src/body';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  users: any[] = [];


  user = {
    username: '',
    password: ''
  };

  private przekieruj: String;
  constructor(private layoutService: LayoutService, private router: Router, public loginService: LoginService) { }

  ngOnInit() {
  }


  ReDirect(przekieruj) {
    this.router.navigate([przekieruj]);
  }

  onSubmit() {
    this.loginService.AddUser(this.user)
      .subscribe((res: Response) => {
        //console.log(res),


        localStorage.setItem('token', JSON.stringify(res));
        console.log(localStorage.getItem('token'));
        this.router.navigate(['']);
        this.layoutService.showSidebar();
        console.log(this.user.username);
        if (this.user.username === 'admin') {
          console.log(this.user.username);
          localStorage.setItem('admin', 'Administrator');
        }
      });

  }


}
