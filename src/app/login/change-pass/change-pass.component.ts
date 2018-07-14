import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.less']
})
export class ChangePassComponent implements OnInit {

  setUpPass = {
    oldPass: '',
    currentPass: '',
    repeatCurrentPass: ''
  };

  constructor(private router: Router, public loginService: LoginService) { }

  ngOnInit() {
  }

  ReDirect(przekieruj) {
    this.router.navigate([przekieruj]);
  }

  change() {

    if (this.setUpPass.currentPass === this.setUpPass.repeatCurrentPass) {
      this.loginService.ChangePass(this.setUpPass).subscribe();
      console.log('poszlo ok');
    } else {
      console.log('Rozne Hasla');
    }

  }

}
