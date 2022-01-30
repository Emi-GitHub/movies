import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  @Output() showInitialMovies = new EventEmitter();
  @Output() showInitialShows = new EventEmitter();
  @Output() restartCounter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSearchSubmit(value: string) {
    if (this.togglerModel === 'movies') this.onSearchMovies.emit(value);
    else if (this.togglerModel === 'shows') this.onSearchShows.emit(value);
  }

  changeType(value: string) {
    this.term = '';
    this.togglerModel = value;
    if (this.togglerModel === 'movies') this.showInitialMovies.emit();
    else if (this.togglerModel === 'shows') this.showInitialShows.emit();
    this.restartCounter.emit();
  }
}
