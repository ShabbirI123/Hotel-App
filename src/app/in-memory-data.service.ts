import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Booking} from "./booking";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const bookings : Booking[] = [
      {
        id: 1,
        name: "Shabbir Islam",
        roomNumber: 1,
        startDate: new Date(),
        endDate: new Date("2023-07-21")
      },
      {
        id: 2,
        name: "Shabbir Islam",
        roomNumber: 2,
        startDate: new Date(),
        endDate: new Date("2023-07-21")
      },
      {
        id: 3,
        name: "Shabbir Islam",
        roomNumber: 3,
        startDate: new Date(),
        endDate: new Date("2023-07-21")
      },
      {
        id: 4,
        name: "Shabbir Islam",
        roomNumber: 4,
        startDate: new Date(),
        endDate: new Date("2023-07-21")
      }
    ];

    return {bookings};
  }
}
