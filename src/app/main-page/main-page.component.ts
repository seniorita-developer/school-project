import { Component, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements  OnChanges {

  constructor() { }


  ngOnChanges() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }

  }


}


