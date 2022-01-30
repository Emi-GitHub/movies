import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
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
