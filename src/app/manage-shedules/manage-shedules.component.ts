import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../services/airline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-shedules',
  templateUrl: './manage-shedules.component.html',
  styleUrls: ['./manage-shedules.component.css']
})
export class ManageShedulesComponent implements OnInit {
flights:any;
  constructor(private _airlineService:AirlineService,private router:Router) { }

  ngOnInit(): void {
    this._airlineService.getFlights().subscribe(
      data => {
          this.flights = data;
          console.log(data);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );


  }

}
