import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-seat-selection',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './seat-selection.html',
  styleUrls: ['./seat-selection.css']
})
export class SeatSelection {

  rows = ['A','B','C','D','E'];
  cols = [1,2,3,4,5,6];

  selectedSeats:string[] = [];

  unavailableSeats = ['A3','B4','C2'];

  constructor(private movieService:MovieService){}

  toggleSeat(row:string,col:number){

    const seat = row+col;

    if(this.unavailableSeats.includes(seat)) return;

    if(this.selectedSeats.includes(seat)){
      this.selectedSeats =
      this.selectedSeats.filter(s=>s!==seat);
    }
    else{
      this.selectedSeats.push(seat);
    }

  }

  confirmBooking(){
    this.movieService.setSelectedSeats(this.selectedSeats);
  }

}
