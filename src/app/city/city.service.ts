import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { City } from './city.model';
import { environment } from 'environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  readonly cityRoute: string = 'city';
  private readonly APIUrl = environment.baseUrl + 'city';

  constructor(private httpClient: HttpClient ) { }

  getList(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.APIUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    return throwError('Something went wrong');
  }

}
