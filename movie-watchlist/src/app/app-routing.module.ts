import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardComponent } from './cards/movie-card/movie-card.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AvengersMoviePageComponent } from './pages/avengers-movie-page/avengers-movie-page.component';
import { DetailCardComponent } from './cards/detail-card/detail-card.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'avengers', component: AvengersMoviePageComponent },
  { path: 'tenet', component: DetailCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
