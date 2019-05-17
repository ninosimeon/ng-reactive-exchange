import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { configuration } from '../../util/configuration';
import Rates from './models/rates.interface';

@Injectable()
export class ExchangeService {

  constructor(public http: HttpClient) {
  }

  public static exchange(toCalculate: number, rates: object, currency: string): number {
    return toCalculate * rates[currency];
  }

  private static handleError(error: Response | any) {
    console.error('ExchangeService::handleError', error);
    return throwError(error);
  }

  public getRates(): Observable<Rates> {
    const options = { params: { access_key: configuration.api_access_key } };
    return this.http.get(configuration.api_url, options).pipe(
      map((response: any) => response),
      catchError(ExchangeService.handleError)
    );
  }

}
