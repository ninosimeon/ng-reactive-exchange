import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html'
})
export class ExchangeFormComponent implements OnInit {
  @Output()
  public add = new EventEmitter<FormGroup>();
  public form = this.fb.group({
    to_convert: ['', Validators.required],
    converted: [''],
  });

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }

}
