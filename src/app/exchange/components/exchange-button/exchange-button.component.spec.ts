import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeButtonComponent } from './exchange-button.component';

describe('ExchangeButtonComponent', () => {
  let component: ExchangeButtonComponent;
  let fixture: ComponentFixture<ExchangeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
