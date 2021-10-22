import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Response } from '../shared/models/response.models'
import { environment } from 'environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  private readonly APIUrl = environment.baseUrl + 'prices';

  constructor(private httpClient: HttpClient ) { }

  getList(): Observable<Response> {
    return this.httpClient.get<Response>(this.APIUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    return throwError('Something went wrong');
  }

}
