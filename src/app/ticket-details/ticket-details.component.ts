import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  PNR:any ;
  ticketBooking:any;
  constructor(private _airlineService:AirlineService,private route:ActivatedRoute,private routes:Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params["id"]);
    let PNR=this.route.snapshot.params["id"];
    this._airlineService.searchPNR(PNR).subscribe(
      data => {
          this.ticketBooking = data[0];
          console.log(this.ticketBooking);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );
  }

}
