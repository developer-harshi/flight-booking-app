import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {
  // @Input() airlineId:any
  airline:any;
   id:any ;
  constructor(private _airlineService:AirlineService,private route:ActivatedRoute,private routes:Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params["id"]);
    let id=this.route.snapshot.params["id"];


    this._airlineService.getAirline(id).subscribe(
      data => {
          this.airline = data;
          console.log(this.airline);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );
  }
  submit()
  {
    console.log(this.airline);
    this._airlineService.airlineRegister(this.airline).subscribe((res) => {
      console.log('Issue added!');
      this.routes.navigateByUrl("/manageairlines");
    }
    , error => {
      console.log('httperror:');
      console.log(error);
  }
    );



  }
  cancel()
  {
    this.routes.navigateByUrl("/manageairlines");

  }

}
