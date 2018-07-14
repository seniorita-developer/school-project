import { CarsModule } from './main-page/cars.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginService } from './login.service';
import { CarService } from './main-page/car-table-row/car.service';
import { LayoutService } from './side-bar/layout.service';
import { AddCarComponent } from './main-page/add-car/add-car.component';
import { MyAdvertComponent } from './main-page/my-advert/my-advert.component';
import { CarDetailsComponent } from './main-page/car-details/car-details.component';
import { ChangePassComponent } from './login/change-pass/change-pass.component';
import { CheckAccountsComponent } from './login/check-accounts/check-accounts.component';
import { SearchComponent } from './main-page/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SideBarComponent,
    LoginComponent,
    RegisterComponent,
    AddCarComponent,
    MyAdvertComponent,
 CarDetailsComponent,
 ChangePassComponent,
 ChangePassComponent,
 CheckAccountsComponent,
 SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  CarsModule,
  HttpClientModule
  ],
  providers: [LoginService, CarService, LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
