import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css']
})
export class MovieList {
  movies = [
    {
      title: 'Inception',
      genre: 'Sci-Fi',
      duration: 148,
      rating: 8.8
    },
    {
      title: 'Interstellar',
      genre: 'Sci-Fi / Drama',
      duration: 169,
      rating: 8.6
    }
  ];
}
