import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-movies',
  template: `
  <input #newMovie (keyup.enter)="addMovie(newMovie.value)" (blur)="addMovie(newMovie.value); newMovie.value='' ">

  <button (click)="addMovie(newMovie.value)">Add</button>

  <ul><li *ngFor="let movie of movies">{{movie}}</li></ul>
  `,
  styleUrls: ['./favourite-movies.component.css']
})
export class FavouriteMoviesComponent implements OnInit {

  movies = ['Thor', 'Avengers', 'The Girl on the Train'];
  addMovie(newMovie: string) {
    if (newMovie) {
      this.movies.push(newMovie);
    }
  }
}
