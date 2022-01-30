import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { MoviesComponent } from './modules/movies/movies.component';
import { RatingComponent } from './modules/rating/rating.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxStarsModule } from 'ngx-stars';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LandingPageComponent,
    MoviesComponent,
    RatingComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxStarsModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
