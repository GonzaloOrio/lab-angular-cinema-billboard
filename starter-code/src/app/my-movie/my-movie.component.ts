import { Component, OnInit } from '@angular/core';
import { Cinema } from '../cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
  providers: [Cinema]
})
export class MyMovieComponent implements OnInit {
  movie: Object = {};
  movieId: number;
  constructor(public cinema: Cinema, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.movieId =+ params['id']);
    this.movie = this.cinema.getMovie(this.movieId);
  }
}
