import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExchangeComponent} from './exchange.component';
import {ExchangeCreatorComponent} from './containers/exchange-creator/exchange-creator.component';

const routes: Routes = [{
  path: '',
  component: ExchangeComponent,
  children: [
    {
      path: '',
      component: ExchangeCreatorComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRoutingModule {
}
