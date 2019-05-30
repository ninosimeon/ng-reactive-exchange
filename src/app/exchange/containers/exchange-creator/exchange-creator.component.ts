import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExchangeService } from '../../exchange.service';
import { interval, Observable, Subscription } from 'rxjs';
import { configuration } from 'src/util/configuration';

const TO_MILISECONDS = 1000 * 60;

@Component({
  selector: 'app-exchange-creator',
  templateUrl: './exchange-creator.component.html'
})
export class ExchangeCreatorComponent implements OnInit, OnDestroy {
  public rates: object;
  public error: string;
  public refreshRates$: Observable<number>;
  public refreshRateSuscription: Subscription;

  public exchanged: number;
  public toCurrency: string;

  constructor(private exchangeService: ExchangeService) {
    this.refreshRates$ = interval(configuration.rates_periodicity_minutes * TO_MILISECONDS);
    this.getRates();

    this.exchanged = 0;
    this.toCurrency = 'USD';
  }

  ngOnInit() {
    this.refreshRateSuscription = this.refreshRates$.subscribe(() => this.getRates());
  }

  public getRates(): void {
    this.exchangeService.getRates()
      .subscribe(
        res => this.rates = res.rates,
        error => this.error = error
      );
  }

  public exchanger(data: any): void {
    this.exchanged = ExchangeService.exchange(data.to_convert, this.rates, this.toCurrency);
  }

  ngOnDestroy() {
    this.refreshRateSuscription.unsubscribe();
  }

}
