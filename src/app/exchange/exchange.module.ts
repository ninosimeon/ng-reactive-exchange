import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExchangeCreatorComponent} from './containers/exchange-creator/exchange-creator.component';
import {ExchangeButtonComponent} from './components/exchange-button/exchange-button.component';
import {ExchangeFormComponent} from './components/exchange-form/exchange-form.component';
import {ExchangeComponent} from './exchange.component';
import {ExchangeRoutingModule} from './exchange-routing.module';
import {ExchangeInputComponent} from './components/exchange-input/exchange-input.component';
import {ExchangeFooterComponent} from './components/exchange-footer/exchange-footer.component';
import {ExchangeNavigationComponent} from './components/exchange-navigation/exchange-navigation.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ExchangeService} from './exchange.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ExchangeButtonComponent,
    ExchangeFormComponent,
    ExchangeCreatorComponent,
    ExchangeComponent,
    ExchangeInputComponent,
    ExchangeFooterComponent,
    ExchangeNavigationComponent
  ],
  imports: [
    CommonModule,
    ExchangeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ExchangeService,
  ]
})
export class ExchangeModule {
}
