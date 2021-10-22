import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Suburb } from './suburb.model';
import { environment } from 'environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuburbService {

  private readonly APIUrl = environment.baseUrl + 'suburb';

  constructor(private httpClient: HttpClient ) { }

  getList(): Observable<Suburb[]> {
    return this.httpClient.get<Suburb[]>(this.APIUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    return throwError('Something went wrong');
  }

}
