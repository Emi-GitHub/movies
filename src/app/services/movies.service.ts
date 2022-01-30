import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string;
  apiKey: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '820d98db2eb5d40038485e1f76c58932';
  }

  public getMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}list/1?api_key=${this.apiKey}`);
  }

  public searchMovies(term: string): Observable<any> {
    return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}`, {
      params: { query: term },
    });
  }

  //Authentication failed: I do not have permissions to access the service.
  public rateMovie(movie_id: number, value: number): Observable<any> {
    return this.http.post(
      `${this.baseUrl}movie/${movie_id}/rating?api_key=${this.apiKey}`,
      {
        params: { value: value },
      }
    );
  }
}
