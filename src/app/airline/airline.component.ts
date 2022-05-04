import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {
  @Input() airlineId:any
  constructor() { }

  ngOnInit(): void {
  }
  submit()
  {

  }
  cancel()
  {

  }

}
