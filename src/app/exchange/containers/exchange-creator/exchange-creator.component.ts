import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../../exchange.service';
import { Observable, Subscription, interval } from 'rxjs';
import { configuration } from 'src/util/configuration';

const TO_MILISECONDS = 1000 * 60;

@Component({
  selector: 'app-exchange-creator',
  templateUrl: './exchange-creator.component.html'
})
export class ExchangeCreatorComponent implements OnInit {
  public rates: object;
  public error: string;
  public refreshRates$: Observable<number>;
  public refreshRateSuscription: Subscription;

  public exchanged: number;

  constructor(private exchangeService: ExchangeService) {
    this.refreshRates$ = interval(configuration.rates_periodicity_minutes * TO_MILISECONDS);
    this.getRates();

    this.exchanged = 0;
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

  public exchanger(event: any): void {
    this.exchanged = this.exchangeService.exchange(event.to_convert, this.rates, 'USD');
  }

  ngOnDestroy() {
    this.refreshRateSuscription.unsubscribe();
  }

}
