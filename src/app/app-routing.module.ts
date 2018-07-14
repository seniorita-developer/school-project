import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AddCarComponent } from './main-page/add-car/add-car.component';
import { MyAdvertComponent } from './main-page/my-advert/my-advert.component';
import { CarDetailsComponent } from './main-page/car-details/car-details.component';
import { ChangePassComponent } from './login/change-pass/change-pass.component';
import { CheckAccountsComponent } from './login/check-accounts/check-accounts.component';
import { SearchComponent } from './main-page/search/search.component';


const APP_ROUTES: Route[] = [
    { path: '', component: MainPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'addCar', component: AddCarComponent },
    { path: 'myAdvert', component: MyAdvertComponent },
    { path: 'cars/:id', component: CarDetailsComponent},
    { path: 'pass', component: ChangePassComponent},
    { path: 'accounts', component: CheckAccountsComponent},
    { path: 'search', component: SearchComponent}
];


@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ], exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
