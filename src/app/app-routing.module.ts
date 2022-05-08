import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineComponent } from './airline/airline.component';
import { DiscountComponent } from './discount/discount.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { ManageDiscountsComponent } from './manage-discounts/manage-discounts.component';
import { ManageHistoryComponent } from './manage-history/manage-history.component';
import { ManageShedulesComponent } from './manage-shedules/manage-shedules.component';
import { Flight, SearchFlight } from './models/flight.model';
import { RegisterComponent } from './register/register.component';
import { SerachflightComponent } from './serachflight/serachflight.component';
import { AuthenticationGuardGuard } from './services/authentication-guard.guard';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full',canActivate:[AuthenticationGuardGuard] },  /*admin services*/
  { path: 'manageairlines', component: ManageAirlinesComponent ,canActivate:[AuthenticationGuardGuard]} , /*admin services*/
  { path: 'airline/:id', component: AirlineComponent ,canActivate:[AuthenticationGuardGuard] } ,
  { path: 'manageflights', component: ManageShedulesComponent ,canActivate:[AuthenticationGuardGuard]} ,
  { path: 'userhome', component: UserHomeComponent ,canActivate:[AuthenticationGuardGuard]} ,
  { path: 'flight/:id', component: FlightComponent ,canActivate:[AuthenticationGuardGuard]} ,
  { path: 'flight-Booking/:id/:id1', component: FlightBookingComponent ,canActivate:[AuthenticationGuardGuard] } ,
  { path: 'search-flight', component: SerachflightComponent ,canActivate:[AuthenticationGuardGuard]} ,
  { path: 'manage-history', component: ManageHistoryComponent ,canActivate:[AuthenticationGuardGuard]} ,
  { path: 'managediscounts', component: ManageDiscountsComponent ,canActivate:[AuthenticationGuardGuard]} , /*admin services*/
  { path: 'discount/:id', component: DiscountComponent ,canActivate:[AuthenticationGuardGuard] } ,
  { path: 'manageb-bookings', component: ManageBookingsComponent ,canActivate:[AuthenticationGuardGuard] } ,
  { path: 'details/:id', component: TicketDetailsComponent ,canActivate:[AuthenticationGuardGuard] } ,
  // { path: 'product/:id', component: ProductDetailComponent }

  // { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
