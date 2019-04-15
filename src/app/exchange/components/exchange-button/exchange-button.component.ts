import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-exchange-button',
  templateUrl: './exchange-button.component.html'
})
export class ExchangeButtonComponent implements OnInit {
  @Input()
  parent: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
