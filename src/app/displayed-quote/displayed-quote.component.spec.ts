import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayedQuoteComponent } from './displayed-quote.component';

describe('DisplayedQuoteComponent', () => {
  let component: DisplayedQuoteComponent;
  let fixture: ComponentFixture<DisplayedQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayedQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayedQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
