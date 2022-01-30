import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { RatingComponent } from './modules/rating/rating.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'rating', component: RatingComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
