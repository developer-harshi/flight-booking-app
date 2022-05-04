import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {
  // @Input() airlineId:any
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params)
  }
  submit()
  {

  }
  cancel()
  {

  }

}
