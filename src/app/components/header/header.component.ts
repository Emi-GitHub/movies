import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  term = '';
  togglerModel = 'movies';

  @Output() onSearchMovies = new EventEmitter<string>();
  @Output() onSearchShows = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSearchSubmit(value: string) {
    if (this.togglerModel === 'movies') this.onSearchMovies.emit(value);
    else if (this.togglerModel === 'shows') this.onSearchShows.emit(value);
  }

  changeType(value: string) {
    this.term = '';
    this.togglerModel = value;
    this.onSearchSubmit('');
  }
}
