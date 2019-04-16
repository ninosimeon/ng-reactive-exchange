import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval} from 'rxjs';

@Injectable()
export class ExchangeService {
  public rates: any;

  constructor(public http: HttpClient) {
    this.getRates();
    this.refreshRates();
  }

  public exchange(toCalculate: number, currency: string): number {
    console.log(this.rates[currency]);
    return toCalculate * this.rates[currency];
  }

  public refreshRates(): void {
    interval(600000).subscribe((x) => {
        this.getRates();
      }
    );
  }

  public getRates(): void {
    const options = {params: {access_key: '33b23d6e01efe285daf21f65e1124757'}};
    this.http.get('http://data.fixer.io/api/latest', options).subscribe((res: any) => {
        this.rates = res.rates;
      }
    );
  }

}
