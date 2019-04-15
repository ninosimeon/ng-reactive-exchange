import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCreatorComponent } from './exchange-creator.component';

describe('ExchangeCreatorComponent', () => {
  let component: ExchangeCreatorComponent;
  let fixture: ComponentFixture<ExchangeCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
