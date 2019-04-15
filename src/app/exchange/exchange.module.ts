import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExchangeCreatorComponent} from './containers/exchange-creator/exchange-creator.component';
import {ExchangeButtonComponent} from './components/exchange-button/exchange-button.component';
import {ExchangeFormComponent} from './components/exchange-form/exchange-form.component';

@NgModule({
  declarations: [ExchangeButtonComponent, ExchangeFormComponent, ExchangeCreatorComponent],
  imports: [
    CommonModule
  ]
})
export class ExchangeModule {
}
