import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Register } from '../models/register.model';

const baseUrl = 'http://localhost:9000/api/v1.0/flight';



@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http: HttpClient) { }
  register(data:Register):Observable<Register>
  {
    return this.http.post(baseUrl,data)
  }
}
