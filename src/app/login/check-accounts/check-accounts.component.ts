import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import { Account } from '../../main-page/Account';

@Component({
  selector: 'app-check-accounts',
  templateUrl: './check-accounts.component.html',
  styleUrls: ['./check-accounts.component.less']
})
export class CheckAccountsComponent implements OnInit {
  account: Account[];
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loadAccounts();
  }
  loadAccounts(): void {

    this.loginService.getAccounts().subscribe((accounty) => {
      this.account = accounty;

    });
  }

  removeAccount(acc: Account) {

    if (confirm('Are you sure to delete account ?')) {
      console.log(acc.id);
      this.loginService.removeAcc(acc.id).subscribe(() => {
        this.loadAccounts();
      });
    }
  }
}

