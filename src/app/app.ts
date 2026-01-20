import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { MovieList } from './components/movie-list/movie-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, MovieList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
