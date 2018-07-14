import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Account } from '../app/app.module/../main-page/Account';
@Injectable()

export class LoginService {

  constructor(private http: Http) { }



  AddUser(user) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(user);
    return this.http.post('http://localhost:8080/demo/login', body, options)
      .map(res => res.json());

  }

  DeleteAcc() {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', localStorage.getItem('token').replace('"', '').replace('"', ''));
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders });
    return this.http.delete('http://localhost:8080/demo/deleteAccount', options);
  }

  register(data) {

    return this.http.post('http://localhost:8080/demo/sign-up', data);
  }

  ChangePass(setUpPass) {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', localStorage.getItem('token').replace('"', '').replace('"', ''));
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders });
    let body = JSON.stringify(setUpPass);
    console.log(setUpPass);
    return this.http.post('http://localhost:8080/demo/changePass', body, options);
    // .map(res => res.json());

  }

  getAccounts(): Observable<Account[]> {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', localStorage.getItem('token').replace('"', '').replace('"', ''));
    let options = new RequestOptions({ headers: myHeaders });
    console.log('dalej');
    //  return this.http.get('http://localhost:8080/demo/allCars', options).map(res => res.json());
    return this.http.get('http://localhost:8080/demo/allAccounts', options).map(res => res.json());
  }


  removeAcc(acc) {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', localStorage.getItem('token').replace('"', '').replace('"', ''));
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders });
    return this.http.delete('http://localhost:8080/demo/deleteAcc' + `/${acc}`, options);
  }

}
