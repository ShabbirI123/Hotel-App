import { Component } from '@angular/core';
import { Booking } from "../booking";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  constructor() {
  }

  booking : Booking = {
    id: 1,
    name: "Shabbir Islam",
    roomNumber: 1,
    startDate: new Date(),
    endDate: new Date("2023-07-21")
  };

  ngOnInit(): void{

  }
}
