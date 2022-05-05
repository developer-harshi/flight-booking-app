import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
  airlines:any;
  flights:any;
  flightSort:any;
  bookingPersonsModel: Array<any> = [];
  newItem: any = {};
  flightBooking:any;

  constructor(private _airlineService:AirlineService,private route:ActivatedRoute,private routes:Router) { }

  ngOnInit(): void {
    this._airlineService.getAirlineLu().subscribe(
      data => {
          this.airlines = data;
          console.log(this.airlines);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );

  this._airlineService.getFlightLu().subscribe(
    data => {
        this.flights = data;
        console.log(this.flights);
    }, error => {
        console.log('httperror:');
        console.log(error);
    }
);
  }



  populateCity(value: any) {
    console.log(value);
    // this.flightSort = this.flights.sort((i: { airlineId: any; }) => i.airlineId == value);
  }
  addItems() {
    this.bookingPersonsModel.push(this.newItem);
    console.log(this.bookingPersonsModel);
    this.newItem = {};
  }

  removeItem(index: number) {
    this.bookingPersonsModel.splice(index, 1); // remove 1 item at ith place
  }
  createFlightBooking()
  {

  }
  cancel()
  {

  }
  submit()
  {

  }
}
