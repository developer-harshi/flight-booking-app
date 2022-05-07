import { Component, OnInit } from '@angular/core';
import { Airline } from '../models/airline.model';
import { AirlineService } from '../services/airline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.css']
})
export class ManageAirlinesComponent implements OnInit {

  airlines:any;
  constructor(private _airlineService:AirlineService,private router:Router) { }

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
  activeInActive(id:any,status:any)
  {
    this._airlineService.adminActibeInActive("dbo.Airline",id,status).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();

      }, error => {
          console.log('httperror:');
          console.log(error);
      }

  );


  }
  // edit(id:any)
  // {
  //   console.log("hello");
  //   console.log(id);
  //   this.router.navigate(['/airline',id]);

  // }

}
