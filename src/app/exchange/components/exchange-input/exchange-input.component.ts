import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exchange-input',
  templateUrl: './exchange-input.component.html'
})
export class ExchangeInputComponent implements OnInit {
  @Input()
  public parent: FormGroup;
  @Input()
  public toCurrency: string;
  @Input()
  public exchanged: number;

  constructor() {
  }

  ngOnInit() {
  }

}
