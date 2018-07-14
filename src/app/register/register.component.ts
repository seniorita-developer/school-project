import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { ApplicationUser } from '../main-page/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  private przekieruj: String;
  user: ApplicationUser = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private formBuilder: FormBuilder, private loginservice: LoginService) { }

  ngOnInit() {
    this.registerForm = this.buildCarForm();
  }
  ReDirect(przekieruj) {
    this.router.navigate([przekieruj]);
  }

  register() {
    const searchFormData = Object.assign({}, this.registerForm.value);
    if (searchFormData.password === searchFormData.password2) {
      this.user.username = searchFormData.username;
      this.user.password = searchFormData.password;
      this.loginservice.register(this.user).subscribe();
    } else {
      confirm('Password confirmation was providede wrong');
    }
    console.log(searchFormData.password);
    //this.loginservice.register(searchFormData).subscribe();
  }
  buildCarForm() {
    return this.formBuilder.group
      ({
        username: [''],
        password: [''],
        password2: ['']

      });
  }
}
