import {Component, OnInit} from '@angular/core';
import {ExchangeService} from '../../exchange.service';

@Component({
  selector: 'app-exchange-creator',
  templateUrl: './exchange-creator.component.html'
})
export class ExchangeCreatorComponent implements OnInit {

  constructor(private exchangeService: ExchangeService) {
  }

  ngOnInit() {
  }

  public exchange(event: any) {
    console.log('hi', event);
  }

}
