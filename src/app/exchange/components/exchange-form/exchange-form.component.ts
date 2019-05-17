import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regexValidators } from 'src/util/regex-validators';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html'
})
export class ExchangeFormComponent implements OnInit {
  @Input()
  public exchanged: number;
  @Input()
  public error: string;
  @Input()
  public toCurrency: string;

  @Output()
  public exchanger = new EventEmitter<FormGroup>();

  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      to_convert: ['', [Validators.required, Validators.pattern(regexValidators.number_with_4_decimals)]],
    });
  }

  ngOnInit() {
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.exchanger.emit(this.form.value);
  }

}
