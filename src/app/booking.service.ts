import {Injectable} from '@angular/core';
import {Booking} from "./booking";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) {
  }

  bookingsURL: string = "/api/bookings";

  getBookings(): Observable<Booking[]> {
    var res = this.httpClient.get<Booking[]>(this.bookingsURL);
    return res;
  }

  getBookingById(id: Number): Observable<Booking> {
    var res = this.httpClient.get<Booking>(this.bookingsURL  + "/" + id);
    return res;
  }

  deleteBooking(booking: Booking): Observable<Booking> {
    var res = this.httpClient.delete<Booking>(this.bookingsURL + "/" + booking.id);
    console.log(res);
    return res;
  }

  addBooking(booking: Booking): Observable<Booking>{
    var res = this.httpClient.post<Booking>(this.bookingsURL, booking);
    return res;
  }
}
