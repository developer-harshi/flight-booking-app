import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AirlineGridComponent } from './airline-grid/airline-grid.component';
import { AirlineFormComponent } from './airline-form/airline-form.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { FlightGridComponent } from './flight-grid/flight-grid.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { ManageHistoryComponent } from './manage-history/manage-history.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { ManageDiscountsComponent } from './manage-discounts/manage-discounts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AirlineGridComponent,
    AirlineFormComponent,
    FlightFormComponent,
    FlightGridComponent,
    FlightBookingComponent,
    ManageHistoryComponent,
    ManageBookingsComponent,
    ManageDiscountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
