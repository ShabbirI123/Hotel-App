import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSignUpComponent } from './event-sign-up.component';

describe('EventSignUpComponent', () => {
  let component: EventSignUpComponent;
  let fixture: ComponentFixture<EventSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventSignUpComponent]
    });
    fixture = TestBed.createComponent(EventSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
