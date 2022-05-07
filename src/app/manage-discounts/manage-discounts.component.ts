import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../services/airline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-discounts',
  templateUrl: './manage-discounts.component.html',
  styleUrls: ['./manage-discounts.component.css']
})
export class ManageDiscountsComponent implements OnInit {
  discounts:any;

  constructor(private _airlineService:AirlineService,private router:Router) { }

  ngOnInit(): void {
    this._airlineService.getallDisCounts().subscribe(
      data => {
          this.discounts = data;
          console.log(data);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );
  }
  activeInActive(id:any,status:any)
  {
    this._airlineService.adminActibeInActive("dbo.Discount",id,status).subscribe(
      data => {

        console.log(data);
        this.ngOnInit();
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );
    }

}
