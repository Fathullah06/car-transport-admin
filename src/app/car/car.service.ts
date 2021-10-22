import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Car } from './car.model';
import { environment } from 'environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly APIUrl = environment.baseUrl + 'car';

  constructor(private httpClient: HttpClient ) { }

  getList(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.APIUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    return throwError('Something went wrong');
  }

}
