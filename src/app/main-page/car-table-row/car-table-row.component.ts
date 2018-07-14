import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CarService } from './car.service';
import { Car } from '../model';
import { Router } from '@angular/router';
import { concat } from 'rxjs/observable/concat';

@Component({
  selector: 'app-car-table-row',
  templateUrl: './car-table-row.component.html',
  styleUrls: ['./car-table-row.component.less']
})
export class CarTableRowComponent implements OnInit {

 // cars: Car[];

@Input() modelCars: Car[];

  zmienna: number = 0;

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {

    this.loadCars();


    if (localStorage.getItem('admin')) {
      this.zmienna = 2;
    }

  }

  loadCars(): void {
    //  console.log('token widoczny w getCars' + localStorage.getItem('token').replace('""' , ''));
     this.carService.getCars()
        .subscribe(car => {
          this.modelCars = car;

        });

    this.carService.getCars().subscribe((cars) => {
      this.modelCars = cars;
    });

  }

  removedCar(car: Car) {
    this.carService.removeCar(car.id).subscribe(() => {
      this.loadCars();
    });

  }



}
