import { Component, OnInit } from '@angular/core';
import { CarService } from '../car-table-row/car.service';

import { Car } from '../model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit, OnDestroy {
  OneCar: Car;
  carForm: FormGroup;
  marks = [
    { id: 1, name: "Audi" },
    { id: 2, name: "BMW" },
    { id: 3, name: "Mercedes" },
    { id: 4, name: "Volkswagen" },
    { id: 5, name: "Volvo" }
  ];

  models = [

  ];
  fuels = [
    { id: 1, name: "Benzyna" },
    { id: 2, name: "Diesel" }
  ];

  sub: Subscription;
  constructor(

    private route: ActivatedRoute,
    private formBuilder: FormBuilder, private carService: CarService, private router: Router
  ) { }

  ngOnInit() {
    this.loadCar();
    this.carForm = this.buildCarForm();
    this.sub = this.carForm.get('marka').valueChanges.subscribe(c => {

      if (c != null) {
        switch (c) {
          case "Audi":
            this.models = [{ id: 1, name: "A3" }, { id: 2, name: "A4" }];
            break;
          case "BMW":
            this.models = [{ id: 3, name: "Seria 3" }, { id: 4, name: "Seria 4" }];
            break;
          case "Mercedes":
            this.models = [{ id: 5, name: "Vito" }, { id: 6, name: "A-class" }];
            break;
          case "Volkswagen":
            this.models = [{ id: 7, name: "Passat" }, { id: 8, name: "Scirocco" }];
            break;
          case "Volvo":
            this.models = [{ id: 9, name: "V40" }, { id: 10, name: "V60" }];
            break;
        }

        //        this.models = c.model;
      }
    });

  }

  loadCar() {
    const id = +this.route.snapshot.params['id'];

    this.carService.getOneCar(id).subscribe((car) => {
      this.OneCar = car;
      this.carForm.setValue({
        model: car.model,
        marka: car.marka,
        rokProdukcji: car.rokProdukcji,
        paliwo: car.paliwo,
        przebieg: car.przebieg,
        moc: car.moc,
        cena: car.cena
      });
    });
  }
  buildCarForm() {
    return this.formBuilder.group
      ({
        model: ['', Validators.required],
        marka: ['', Validators.required],
        rokProdukcji: ['', Validators.required],
        paliwo: ['', Validators.required],
        przebieg: ['', Validators.required],
        moc: ['', Validators.required],
        cena: ['', Validators.required]

      });
  }
  updateAuto() {
    const id = +this.route.snapshot.params['id'];
    const carFormData = Object.assign({}, this.carForm.value);


    this.carService.updateCar(id, this.carForm.value).subscribe();
    this.router.navigate(['']);


    //console.log(carFormData);
    // .subscribe(() => {
    //   console.log('poszło');
    // });
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }

}
