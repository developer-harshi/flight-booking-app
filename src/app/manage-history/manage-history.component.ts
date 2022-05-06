import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../services/airline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-history',
  templateUrl: './manage-history.component.html',
  styleUrls: ['./manage-history.component.css']
})
export class ManageHistoryComponent implements OnInit {
bookingHistory:any;
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

}
