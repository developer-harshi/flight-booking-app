import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchFlight } from '../models/flight.model';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-serachflight',
  templateUrl: './serachflight.component.html',
  styleUrls: ['./serachflight.component.css']
})
export class SerachflightComponent implements OnInit {
  serachForm:any;
  flights:any;
  serachFlight=new SearchFlight();
  constructor(private _airlineService:AirlineService,private formbulider: FormBuilder,private routes:Router) {}

  ngOnInit(): void {
    this.serachForm = this.formbulider.group({
      searchDate: ['', [Validators.required]],
      fromLocation: ['', [Validators.required]],
      toLocation: ['', [Validators.required]],
      roundTripDate: ['']

      // Address: ['', [Validators.required]],
      // Country: ['', [Validators.required]],
      // State: ['', [Validators.required]],
      // City: ['', [Validators.required]],
      // Pincode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')])]
    });

  }
  get searchDate() {
    return this.serachForm.get('searchDate') as FormControl;
}
get fromLocation() {
    return this.serachForm.get('fromLocation') as FormControl;
}
get toLocation() {
    return this.serachForm.get('toLocation') as FormControl;
}
get roundTripDate() {
    return this.serachForm.get('roundTripDate') as FormControl;
}

  get f(){
    return this.serachForm.controls;
  }
  userData(): SearchFlight {



    this.serachFlight.SearchDate= this.searchDate.value;
    this.serachFlight.FromLocation= this.fromLocation.value;
    this.serachFlight.ToLocation= this.toLocation.value;
    this.serachFlight.RoundTripDate=this.roundTripDate.value
 return this.serachFlight;

}
  serch()
  {
    console.log(this.serachForm);
    // let register=new Register();
    const serach=this.userData();
    console.log(serach);
    this._airlineService.searchFlight(serach).subscribe(
      data => {
          this.flights = data;
          console.log(this.flights);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );
      // this.ngZone.run(() => this.router.navigateByUrl('/issues-list'));


  }


  flightBooking(singleFlight:any)
  {
    this.routes.navigate(['/flight-Booking', singleFlight.id,  singleFlight.id]);
  }
}
