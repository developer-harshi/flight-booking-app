import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Register } from '../models/register.model';
import { environment } from '../../environments/environment';

const baseUrl =environment.appRoot;
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('token')}`
});
const requestOptions = { headers: headers };
@Injectable({
  providedIn: 'root'
})
export class AirlineService {




  private handleError: HandleError;
  constructor(private http: HttpClient,httpErrorHandler: HttpErrorHandler) {

    this.handleError = httpErrorHandler.createHandleError('AirlineService');
   }





   getAirlines():Observable<any> {

    return this.http.get((baseUrl+'/getallairlines'),requestOptions) .pipe(
      catchError(this.handleError())
    );
  }
  getAirline(id:any):Observable<any> {
    // console.log((baseUrl+'/getallairline/'+id));

    return this.http.get((baseUrl+'/getairline/'+id),requestOptions) .pipe(
      catchError(this.handleError())
    );
  }
  airlineRegister(data:any):Observable<Register>
  {

    return this.http.post((baseUrl+'/airline/register'),data,requestOptions) .pipe(
      catchError(this.handleError('register', data))
    );
  }
  getFlights():Observable<any>
  {

    return this.http.get((baseUrl+'/getallflights'),requestOptions) .pipe(
      catchError(this.handleError())
    );
  }
  getFlight(id:any):Observable<any>
  {

    return this.http.get((baseUrl+'/getflight/'+id),requestOptions) .pipe(
      catchError(this.handleError())
    );
  }

  getAirlineLu():Observable<any>
  {

    return this.http.get((baseUrl+'/getairlinelu'),requestOptions) .pipe(
      catchError(this.handleError())
    );
  }
 sheduleFlight(data:any):Observable<Register>
  {
    return this.http.post((baseUrl+'/airline/inventory/add'),data,requestOptions) .pipe(
      catchError(this.handleError('register', data))
    );
  }

}
