import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule for routing
import { AppComponent } from './app.component';
import { BookingService } from './booking.service'; // Import the BookingService
import { By } from '@angular/platform-browser';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core"; // Import By for querying DOM elements

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let bookingService: BookingService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]), // Setup router with no specific routes for simplicity
        HttpClientTestingModule, // Import HttpClientTestingModule to mock HTTP requests
      ],
      declarations: [AppComponent],
      providers: [BookingService], // Provide the actual service
      schemas: [NO_ERRORS_SCHEMA], // Ignore unknown elements like router-outlet
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    bookingService = TestBed.inject(BookingService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  //Unit Test
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Hotel Buchungen'`, () => {
    expect(component.title).toEqual('Hotel Buchungen');
  });

  //Component Test
  it('should render title in the DOM', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.display-4')?.textContent).toContain('Hotel Buchungen');
  });

  it('should have navigation links', () => {
    const navLinks = fixture.debugElement.queryAll(By.css('.nav-link'));
    expect(navLinks.length).toBe(3); // Expect 3 navigation links
    expect(navLinks[0].nativeElement.textContent).toContain('Overview');
    expect(navLinks[1].nativeElement.textContent).toContain('Create');
    expect(navLinks[2].nativeElement.textContent).toContain('Events');
  });

  it('should navigate to /bookings when Overview is clicked', () => {
    const overviewLink = fixture.debugElement.query(By.css('a[routerLink="/bookings"]')).nativeElement;
    overviewLink.click();
    fixture.detectChanges();
    expect(overviewLink.getAttribute('routerLink')).toBe('/bookings');
  });

  it('should navigate to /create when Create is clicked', () => {
    const createLink = fixture.debugElement.query(By.css('a[routerLink="/create"]')).nativeElement;
    createLink.click();
    fixture.detectChanges();
    expect(createLink.getAttribute('routerLink')).toBe('/create');
  });

  it('should navigate to /events when Events is clicked', () => {
    const eventsLink = fixture.debugElement.query(By.css('a[routerLink="/events"]')).nativeElement;
    eventsLink.click();
    fixture.detectChanges();
    expect(eventsLink.getAttribute('routerLink')).toBe('/events');
  });

  //Integration Test
  it('should fetch bookings from BookingService', () => {
    const mockBookings = [
      { id: 1, name: 'John Doe', roomNumber: 101, startDate: new Date(), endDate: new Date() },
      { id: 2, name: 'Jane Smith', roomNumber: 102, startDate: new Date(), endDate: new Date() },
    ];

    bookingService.getBookings().subscribe((bookings) => {
      expect(bookings.length).toBe(2);
      expect(bookings).toEqual(mockBookings);
    });

    const req = httpTestingController.expectOne('/api/bookings');
    expect(req.request.method).toEqual('GET');
    req.flush(mockBookings);
  });
});
