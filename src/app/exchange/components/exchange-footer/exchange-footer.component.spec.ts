import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeFooterComponent } from './exchange-footer.component';

describe('ExchangeFooterComponent', () => {
  let component: ExchangeFooterComponent;
  let fixture: ComponentFixture<ExchangeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
