import { Routes } from '@angular/router';
import { MovieList } from './components/movie-list/movie-list';
import { MovieDetail } from './components/movie-detail/movie-detail';
import { ShowtimeList } from './components/showtime-list/showtime-list';
import { SeatSelection } from './components/seat-selection/seat-selection';
import { BookingSummary } from './components/booking-summary/booking-summary';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MovieList },
  { path: 'movies/:id', component: MovieDetail },
  { path: 'showtimes', component: ShowtimeList },
  { path: 'seats/:id', component: SeatSelection },
  { path: 'summary', component: BookingSummary }
];
