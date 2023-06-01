import {Component, OnInit} from '@angular/core';
import {Booking} from "../booking";
import {Bookings} from "../mock-bookings";
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit{

  constructor(private router: Router, private activatedRpute: ActivatedRoute) {
  }

  booking: Booking = {
    id: 100,
    name: "Your name",
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date()
  }

  ngOnInit(): void {
    if (this.router.url == "/edit") {
      var id = Number(this.activatedRpute.snapshot.paramMap.get("id"));

      var bookingById = Bookings.find(booking => booking.id == id)!;
      this.booking = bookingById;
    }
  }

  save() {
    Bookings.push(this.booking);
    this.router.navigate(["bookings"]);
  }
}
