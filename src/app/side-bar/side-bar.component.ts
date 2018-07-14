import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {
  private przekieruj: String;
  isSidebarVisible: number = 0;

  constructor(private layoutService: LayoutService, private router: Router, private loginService: LoginService) {

  }

  ngOnInit() {

    this.layoutService.sidebarSource$.asObservable().subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    });

    if (localStorage.getItem('token')) {
      if (localStorage.getItem('admin')) {
        this.isSidebarVisible = 2;
      } else {
        this.isSidebarVisible = 1;
      }
    } else {
      this.isSidebarVisible = 0;
    }

  }


  ReDirect(przekieruj) {
    this.router.navigate([przekieruj]);
  }

  Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    this.router.navigate(['']);
    this.layoutService.hideSidebar();
  }
  clickMethod() {
    if (confirm('Are you sure to delete account ?')) {
      this.loginService.DeleteAcc().subscribe();
      this.Logout();
    }

  }
  ChangePassword() {
    this.router.navigate(['pass']);

  }

  checkAccounts() {
    this.router.navigate(['accounts']);
    // this.loginService.getAccounts().subscribe();

  }
  search() {
    this.router.navigate(['search']);
  }
  checkCars() {
    this.router.navigate(['']);
  }
}
