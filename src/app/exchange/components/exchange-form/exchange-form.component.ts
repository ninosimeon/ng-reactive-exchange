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
  public exchanger = new EventEmitter<FormGroup>();
  
  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      to_convert: ['', [Validators.required, Validators.pattern('\\d+(.\\d{1,4})?')]],
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
