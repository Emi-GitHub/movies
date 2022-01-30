import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  baseUrl: string;
  apiKey: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '820d98db2eb5d40038485e1f76c58932';
  }

  public getShows(): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/top_rated?api_key=${this.apiKey}`);
  }

  // NOTE: This API has no option to search by rate or date, only by name.
  // If this part is also required for frontend besides API CALL I will explain how I would do that bellow:
  // First I will declare regex variable ->
  // regexStars = '/^[0-5] stars$/';
  // regexAtLeastStars = '/^at least [0-5] stars$/';
  // regexAfterDate = '/\s*after\s*\d{4}$/';
  // regexOlderDate = '/^older then \d* years$/';
  // After that I will create new array, and if user serch for exaple '3 stars' I will go through objects of movies array, and if some object matches
  // with searched value I would append it to the new array.

  public searchShows(term: string): Observable<any> {
    return this.http.get(`${this.baseUrl}search/tv?api_key=${this.apiKey}`, {
      params: { query: term },
    });
  }
}
