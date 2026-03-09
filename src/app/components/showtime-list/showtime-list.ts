import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-showtime-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './showtime-list.html',
  styleUrls: ['./showtime-list.css']
})
export class ShowtimeList {

  showtimes = [
    { id: 1, time: '10:00 AM', theatre: 'PVR Cinemas' },
    { id: 2, time: '01:30 PM', theatre: 'INOX' },
    { id: 3, time: '04:30 PM', theatre: 'Cinepolis' },
    { id: 4, time: '07:30 PM', theatre: 'PVR IMAX' },
    { id: 5, time: '10:30 PM', theatre: 'INOX Luxe' }
  ];

}
