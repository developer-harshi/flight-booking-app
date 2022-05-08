import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../services/airline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.css']
})
export class ManageBookingsComponent implements OnInit {
  bookingHistory:any;
  PNR:any;

  constructor(private _airlineService:AirlineService,private router:Router) { }

  ngOnInit(): void {
    this._airlineService.getHistory(localStorage.getItem('userName')).subscribe(
      data => {
          this.bookingHistory = data;
          console.log(data);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );
  }
  cancelBooking(pnrNumber:any)
  {
    this._airlineService.cancelPNR(pnrNumber).subscribe(
      data => {

        console.log(data);
        this.ngOnInit();
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );

  }
  search()
  {
    if(this.PNR!=null && this.PNR!=undefined && this.PNR!="")
    {
      this._airlineService.searchPNR(this.PNR).subscribe(
        data => {
            this.bookingHistory = data;
            console.log(data);
        }, error => {
            console.log('httperror:');
            console.log(error);
        }
    );
    }
    else
    {
      this.ngOnInit()
    }

  }

}
