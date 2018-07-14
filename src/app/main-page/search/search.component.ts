import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { CarService } from '../car-table-row/car.service';
import { Router } from '@angular/router';
import { Car } from '../model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
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

  cars: Car[];

  sub: Subscription;

  constructor(private formBuilder: FormBuilder,
    private carService: CarService,
    private router: Router) { }

  ngOnInit() {

    this.searchForm = this.buildCarForm();
    this.sub = this.searchForm.get('marka').valueChanges.subscribe(c => {

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
  buildCarForm() {
    return this.formBuilder.group
      ({
        model: [''],
        marka: [''],
        rokProdukcji_od: [''],
        rokProdukcji_do: [''],
        paliwo: [''],
        przebieg_od: [''],
        przebieg_do: [''],
        moc_od: [''],
        moc_do: [''],
        cena_od: [''],
        cena_do: ['']

      });
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }


  searchCar() {
    const searchFormData = Object.assign({}, this.searchForm.value);
    this.carService.searchCar(searchFormData).subscribe((cars) => {
      console.log(cars);
      this.cars = cars;
    });
  }


  }

