import { ExchangeFormComponent } from './exchange-form.component';
import { FormBuilder } from '@angular/forms';

describe('#ExchangeForm', () => {
  let component: ExchangeFormComponent;

  beforeEach(() => {
    component = new ExchangeFormComponent(new FormBuilder());
  });

  it('Sending value from dumb component to smart component.', () => {
    updateInput('to_convert', 5);

    component.exchanger.subscribe(values => expect(values).toEqual({to_convert: 5}));
    component.onSubmit();
  });

  const updateInput = (name: string, value: any) => {
    component.form.controls[name].setValue(value);
  }
});
