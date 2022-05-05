import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineComponent } from './airline/airline.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import { ManageShedulesComponent } from './manage-shedules/manage-shedules.component';
import { Flight, SearchFlight } from './models/flight.model';
import { RegisterComponent } from './register/register.component';
import { SerachflightComponent } from './serachflight/serachflight.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },  /*admin services*/
  { path: 'manageairlines', component: ManageAirlinesComponent } , /*admin services*/
  { path: 'airline/:id', component: AirlineComponent } ,
  { path: 'manageflights', component: ManageShedulesComponent } ,
  { path: 'userhome', component: UserHomeComponent } ,
  { path: 'flight/:id', component: FlightComponent } ,
  { path: 'flight-Booking', component: FlightBookingComponent } ,
  { path: 'search-flight', component: SerachflightComponent } ,
  // { path: 'product/:id', component: ProductDetailComponent }

  // { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
