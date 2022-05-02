import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Register } from '../models/register.model';

const baseUrl = 'http://localhost:9001/api/v1.0/flight';



@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  private handleError: HandleError;
  constructor(private http: HttpClient,httpErrorHandler: HttpErrorHandler) {

    this.handleError = httpErrorHandler.createHandleError('HeroesService');
   }
  register(data:Register):Observable<Register>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post((baseUrl+'/usersignup'),data,httpOptions) .pipe(
      catchError(this.handleError('register', data))
    );
  }

}
