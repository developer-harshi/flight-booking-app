import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
// import { EventEmitter } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { MessagesComponent } from './messages/messages.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SerachflightComponent } from './serachflight/serachflight.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { LoadFlightsComponent } from './load-flights/load-flights.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import { AirlineComponent } from './airline/airline.component';
import { ManageShedulesComponent } from './manage-shedules/manage-shedules.component';
import { FlightComponent } from './flight/flight.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { ManageHistoryComponent } from './manage-history/manage-history.component';
import { AuthguardServiceService } from './services/authguard-service.service';
import { ManageDiscountsComponent } from './manage-discounts/manage-discounts.component';
import { DiscountComponent } from './discount/discount.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MessagesComponent,
    LoginComponent,
    HomeComponent,
    SerachflightComponent,
    LoadFlightsComponent,
    ManageAirlinesComponent,
    AirlineComponent,
    ManageShedulesComponent,
    FlightComponent,
    UserHomeComponent,
    FlightBookingComponent,
    ManageBookingsComponent,
    ManageHistoryComponent,
    ManageDiscountsComponent,
    DiscountComponent,
    TicketDetailsComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,



  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    AuthguardServiceService

    // { provide: RequestCache, useClass: RequestCacheWithMap },
    // httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

