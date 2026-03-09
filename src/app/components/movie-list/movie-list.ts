import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css']
})
export class MovieList {

  movies:any[] = [];
  filteredMovies:any[] = [];
  searchText:string = "";

  constructor(private movieService:MovieService){
    this.movies = this.movieService.getMovies();
    this.filteredMovies = this.movies;
  }

  searchMovies(){
    this.filteredMovies = this.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
