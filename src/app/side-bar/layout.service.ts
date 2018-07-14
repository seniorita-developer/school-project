import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LayoutService {

  sidebarSource$ = new BehaviorSubject<number>(0);
  showSidebar() {
    if (localStorage.getItem('admin')) {
      this.sidebarSource$.next(2);
    } else {
      this.sidebarSource$.next(1);
    }
  }
  hideSidebar() {
    this.sidebarSource$.next(0);
  }
}
