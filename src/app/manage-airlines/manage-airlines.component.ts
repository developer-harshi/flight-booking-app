import { Component, OnInit } from '@angular/core';
import { Airline } from '../models/airline.model';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.css']
})
export class ManageAirlinesComponent implements OnInit {

  airlines:any;
  constructor(private _airlineService:AirlineService) { }

  ngOnInit(): void {

    this._airlineService.getAirlines().subscribe(
      data => {
          this.airlines = data;
          console.log(data);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );

  }

}
