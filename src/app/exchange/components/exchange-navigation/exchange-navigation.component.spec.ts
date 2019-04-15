import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeNavigationComponent } from './exchange-navigation.component';

describe('ExchangeNavigationComponent', () => {
  let component: ExchangeNavigationComponent;
  let fixture: ComponentFixture<ExchangeNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
