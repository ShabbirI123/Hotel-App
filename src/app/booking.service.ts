import { Injectable } from '@angular/core';
import {Bookings} from "./mock-bookings";
import {Booking} from "./booking";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  getBookings(): Booking[]{
    return Bookings;
  }

  getBookingById(id:Number): Booking{
    return Bookings.find(booking => booking.id == id)!;

  }

  deleteBooking(booking: Booking): void {
    var index = Bookings.indexOf(booking);
    Bookings.splice(index, 1);
  }

  addBooking(booking:Booking):void{
    Bookings.push(booking);
  }

  updateBooking(booking:Booking):void{
    var currentBooking = this.getBookingById(booking.id);
    currentBooking = booking;
  }
}
