import { CarTableRowComponent } from './car-table-row/car-table-row.component';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [CarTableRowComponent],
    declarations: [CarTableRowComponent]
})
export class CarsModule {}