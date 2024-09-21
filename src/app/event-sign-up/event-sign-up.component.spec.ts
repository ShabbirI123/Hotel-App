import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { EventSignUpComponent } from './event-sign-up.component';

describe('EventSignUpComponent', () => {
  let component: EventSignUpComponent;
  let fixture: ComponentFixture<EventSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule], // Add FormsModule to provide ngForm
      declarations: [EventSignUpComponent],
    });
    fixture = TestBed.createComponent(EventSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
