import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MoviesService } from 'src/app/services/movies.service';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  togglerModel = 'movies';
  movies = [];
  shows = [];
  loadMoreMovies = false;
  loadMoreCounterMovies = 10;
  loadMoreShows = false;
  loadMoreCounterShows = 10;
  term = '';

  @ViewChild('toggler') toggler: HeaderComponent;

  constructor(
    private movieService: MoviesService,
    private showService: ShowsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMovies();
    this.getShows();
  }

  getMovies() {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data.items;
      this.movies.sort((a: any, b: any) =>
        a.vote_average < b.vote_average
          ? 1
          : b.vote_average < a.vote_average
          ? -1
          : 0
      );
    });
  }

  getShows() {
    this.showService.getShows().subscribe((data: any) => {
      this.shows = data.results;
      this.shows.sort((a: any, b: any) =>
        a.vote_average < b.vote_average
          ? 1
          : b.vote_average < a.vote_average
          ? -1
          : 0
      );
    });
  }

  searchMovies(term: string) {
    this.movieService.searchMovies(term).subscribe((data: any) => {
      this.movies = data.results;
      this.movies.sort((a: any, b: any) =>
        a.vote_average < b.vote_average
          ? 1
          : b.vote_average < a.vote_average
          ? -1
          : 0
      );
    });
  }

  searchShows(term: string) {
    this.showService.searchShows(term).subscribe((data: any) => {
      this.shows = data.results;
      this.shows.sort((a: any, b: any) =>
        a.vote_average < b.vote_average
          ? 1
          : b.vote_average < a.vote_average
          ? -1
          : 0
      );
    });
  }

  onLoadMoreMovies() {
    this.loadMoreMovies = true;
    this.loadMoreCounterMovies = this.loadMoreCounterMovies + 10;
    this.loadMoreMovies = false;
  }

  onLoadMoreShows() {
    this.loadMoreShows = true;
    this.loadMoreCounterShows = this.loadMoreCounterShows + 10;
    this.loadMoreShows = false;
  }

  onRatingClick() {
    this.router.navigate(['/rating']);
  }

  onSearchMovies(value: any) {
    this.term = value;
    if (value.length <= 2) {
      this.movies = [];
      this.getMovies();
      return;
    }
    this.movies = [];
    this.searchMovies(value);
  }

  onSearchShows(value: any) {
    this.term = value;
    if (value.length <= 2) {
      this.shows = [];
      this.getShows();
      return;
    }
    this.shows = [];
    this.searchShows(value);
  }
}
