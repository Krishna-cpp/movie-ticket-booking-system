import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './booking-summary.html',
  styleUrls: ['./booking-summary.css']
})
export class BookingSummary {

seats:string[] = [];
movieName = "Selected Movie";
showtime = "Selected Showtime";

constructor(private movieService: MovieService){
this.seats = this.movieService.getSelectedSeats();
}

}
