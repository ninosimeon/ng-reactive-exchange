import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html'
})
export class ExchangeFormComponent implements OnInit {
  @Input()
  public exchanged: number;

  @Output()
  public exchange = new EventEmitter<FormGroup>();
  public form = this.fb.group({
    to_convert: ['', [Validators.required, Validators.pattern('\\d+.?\\d{0,4}')]],
  });

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.exchange.emit(this.form.value);
  }

}
