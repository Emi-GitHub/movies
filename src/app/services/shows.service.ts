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

  public searchShows(term: string): Observable<any> {
    return this.http.get(`${this.baseUrl}search/tv?api_key=${this.apiKey}`, {
      params: { query: term },
    });
  }
}
