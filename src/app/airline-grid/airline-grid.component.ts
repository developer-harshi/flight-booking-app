import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airline-grid',
  templateUrl: './airline-grid.component.html',
  styleUrls: ['./airline-grid.component.css']
})
export class AirlineGridComponent implements OnInit {

  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }


}

