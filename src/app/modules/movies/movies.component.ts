import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  imgCover: string;

  @Input() i: number;
  @Input() title: string;
  @Input() desc: string;
  @Input() releaseDate: string;
  @Input() actors = [];
  @Input() vote: number;
  @Input() cover: string;

  constructor() {}

  ngOnInit(): void {
    this.imgCover = this.cover + this.i;
  }
}
