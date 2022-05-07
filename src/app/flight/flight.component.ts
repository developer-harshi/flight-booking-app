import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  flight:any;
shedules=["Daily", "Week Day" ,"Week Days","Week Ends"];
id:any ;
airlines:any;
// selectedObject:any;
  constructor(private _airlineService:AirlineService,private route:ActivatedRoute,private routes:Router) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.params["id"]);
    let id=this.route.snapshot.params["id"];


    this._airlineService.getFlight(id).subscribe(
      data => {
          this.flight = data;
          console.log(this.flight);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );
  this._airlineService.getAirlineLu().subscribe(
    data => {
        this.airlines = data;
        console.log(this.airlines);
    }, error => {
        console.log('httperror:');
        console.log(error);
    }
);


  }
  submit()
  {
     console.log(this.flight);
    this._airlineService.sheduleFlight(this.flight).subscribe((res) => {
      console.log(this.flight);
      this.routes.navigateByUrl("/manageflights");
    }
    , error => {
      console.log('httperror:');
      console.log(error);
  }
    );

  }
  cancel()
  {
    this.routes.navigateByUrl("/manageflights");

  }







}
