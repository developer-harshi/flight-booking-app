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
  bookingPersonsModel1: Array<any> = [];
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
this.createFlightBooking();
  }



  populateCity(value: any) {
    console.log(value.value);
     this.flightSort = this.flights.sort((i: { airlineId: any; }) => i.airlineId === value.value);
  }
  addItems() {
    console.log(this.newItem);
    this.flightBooking.bookingPersonsModel.push(this.newItem);
    console.log(this.bookingPersonsModel1);
    // this.newItem = {};
  }

  removeItem(index: number) {
    this.flightBooking.bookingPersonsModel.splice(index, 1); // remove 1 item at ith place
  }
  createFlightBooking()
  {
    console.log(this.route.snapshot.params["id"]);
    let id=this.route.snapshot.params["id"];
    this._airlineService.createFlightBooking(id).subscribe(
      data => {
          this.flightBooking = data;
          console.log(this.flightBooking);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );
  this.flightBooking.registeredMailId=localStorage.getItem('userName');
  this._airlineService.getempty().subscribe(
    data => {
        this.newItem = data;
        console.log(this.newItem);
    }, error => {
        console.log('httperror:');
        console.log(error);
    }

);


  // this.newItem=this.flightBooking.bookingPersonsModel[0];


  }
  cancel()
  {
    this.routes.navigateByUrl("/search-flight");



  }
  submit()
  {
    // console.log(this.flightBooking);
    this.flightBooking.registeredMailId=localStorage.getItem('userName');
    console.log(this.flightBooking);
    this._airlineService.saveBooking(this.flightBooking).subscribe((res) => {
      console.log('Issue added!');
       this.routes.navigateByUrl("/manage-history");
    }
    , error => {
      console.log('httperror:');
      console.log(error);
  }
    );

  }
}
