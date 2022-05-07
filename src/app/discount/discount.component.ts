import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
discount:any;
  constructor(private _airlineService:AirlineService,private route:ActivatedRoute,private routes:Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params["id"]);
    let id=this.route.snapshot.params["id"];
    this._airlineService.getDisCount(id).subscribe(
      data => {
          this.discount = data;
          console.log(this.discount);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );
  }
  submit()
  {
    console.log(this.discount);
    this._airlineService.saveDiscounts(this.discount).subscribe((res) => {

      this.routes.navigateByUrl("/managediscounts");
    }
    , error => {
      console.log('httperror:');
      console.log(error);
  }
    );

  }
  cancel()
  {
    this.routes.navigateByUrl("/managediscounts");
  }

}
