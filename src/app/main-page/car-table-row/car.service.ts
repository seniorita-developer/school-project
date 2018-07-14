import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Car } from '../model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

  getCars() {

    // let myHeaders = new Headers();
    //  myHeaders.append('Authorization', localStorage.getItem('token').replace('"', '').replace('"', ''));
    //   let options = new RequestOptions({ headers: myHeaders });
    //  return this.http.get('http://localhost:8080/demo/allCars', options).map(res => res.json());
    return this.http.get<Car[]>('http://localhost:8080/demo/allCars');//.map(res => res.json());
  }

  getOneCar(id: number) {

    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', localStorage.getItem('token').replace('"', '').replace('"', ''));
    myHeaders = myHeaders.append('Content-Type', 'application/json');
    //  let options = new RequestOptions({ headers: myHeaders });
    return this.http.get<Car>('http://localhost:8080/demo/OneCar' + '/' + id, { headers: myHeaders });//.map(res => res.json());
  }


  addCar(data): Observable<any> {

    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', localStorage.getItem('token').replace('"', '').replace('"', ''));
    myHeaders = myHeaders.append('Content-Type', 'application/json');
    // let options = new RequestOptions({ headers: myHeaders });
    console.log(data);
    return this.http.post('http://localhost:8080/demo/addCar', data, { headers: myHeaders });
    //.map(res => res.json());

  }

  updateCar(id: number, data): Observable<any> {

    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', localStorage.getItem('token').replace('"', '').replace('"', ''));
    myHeaders = myHeaders.append('Content-Type', 'application/json');
    //  let options = new RequestOptions({ headers: myHeaders });
    console.log(data);
    return this.http.post('http://localhost:8080/demo/updateCar' + `/${id}`, data, { headers: myHeaders });
    //.map(res => res.json());

  }

  removeCar(id: number): Observable<any> {
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', localStorage.getItem('token').replace('"', '').replace('"', ''));
    myHeaders = myHeaders.append('Content-Type', 'application/json');
    // let options = new RequestOptions({ headers: myHeaders });
    return this.http.delete('http://localhost:8080/demo/deleteCar' + `/${id}`, { headers: myHeaders });
    //    .map((res) => res.json());
  }



  getMyCars() {

    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', localStorage.getItem('token').replace('"', '').replace('"', ''));
    myHeaders = myHeaders.append('Content-Type', 'application/json');
    // let options = new RequestOptions({ headers: myHeaders });
    return this.http.get<Car[]>('http://localhost:8080/demo/allMyCars', { headers: myHeaders });//.map(res => res.json());
  }

  searchCar(data): Observable<any> {
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', localStorage.getItem('token').replace('"', '').replace('"', ''));
    myHeaders = myHeaders.append('Content-Type', 'application/json');
    // let options = new RequestOptions({ headers: myHeaders });
    return this.http.post('http://localhost:8080/demo/searchCar', data, { headers: myHeaders });//.map(res => res.json());
  }

}
