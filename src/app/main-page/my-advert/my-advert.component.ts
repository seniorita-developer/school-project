import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car-table-row/car.service';
import { Car } from '../model';

@Component({
  selector: 'app-my-advert',
  templateUrl: './my-advert.component.html',
  styleUrls: ['./my-advert.component.less']
})
export class MyAdvertComponent implements OnInit {

  constructor(private carService: CarService, private router: Router) { }

  cars: Car[];

  ngOnInit() {
    this.loadMyCars();
  }

  loadMyCars(): void {


    this.carService.getMyCars().subscribe((cars) => {
      this.cars = cars;
    });
  }

  removedCar(car: Car) {
    this.carService.removeCar(car.id).subscribe(() => {
      this.loadMyCars();
    });

  }


}
