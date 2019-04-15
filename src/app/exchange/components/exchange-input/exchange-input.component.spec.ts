import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeInputComponent } from './exchange-input.component';

describe('ExchangeInputComponent', () => {
  let component: ExchangeInputComponent;
  let fixture: ComponentFixture<ExchangeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
