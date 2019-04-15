import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExchangeFormInterface} from '../../models/exchange-form.interface';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html'
})
export class ExchangeFormComponent implements OnInit {
  @Output()
  public add = new EventEmitter<FormGroup>();
  public form = this.fb.group({
    to_convert: ['', Validators.required],
    converted: [{value: '', disabled: true}],
  });

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }

  public onSubmit(form: ExchangeFormInterface): void {
    console.log(form);
  }

}
