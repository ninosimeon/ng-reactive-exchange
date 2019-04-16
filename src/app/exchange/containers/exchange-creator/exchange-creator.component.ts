import {Component, OnInit} from '@angular/core';
import {ExchangeService} from '../../exchange.service';

@Component({
  selector: 'app-exchange-creator',
  templateUrl: './exchange-creator.component.html'
})
export class ExchangeCreatorComponent implements OnInit {
  public exchanged: number;

  constructor(private exchangeService: ExchangeService) {
    this.exchanged = null;
  }

  ngOnInit() {
  }

  public exchange(event: any) {
    this.exchanged = this.exchangeService.exchange(event.to_convert, 'USD');
  }

}
