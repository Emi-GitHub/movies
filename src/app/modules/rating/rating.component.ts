import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { EditRate } from 'src/app/store/actions/rating.action';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  rating: Observable<any>;
  initialRate = 0;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.rating = this.store.select('rating');
  }

  onBackClick() {
    this.router.navigate(['/']);
  }

  onRatingSet(value: any, id: number) {
    this.store.dispatch(new EditRate(id, value));
    this.initialRate = value;
  }
}
