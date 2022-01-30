import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  term = '';
  togglerModel = 'movies';
  @Output() onSearchMovies = new EventEmitter<string>();
  @Output() onSearchShows = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSearchSubmit(event: any) {
    if (this.togglerModel === 'movies')
      this.onSearchMovies.emit(event.target.value);
    else if (this.togglerModel === 'shows')
      this.onSearchShows.emit(event.target.value);
  }

  reset() {
    this.term = '';
  }
}
