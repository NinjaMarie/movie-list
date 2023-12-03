import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardComponent } from './cards/movie-card/movie-card.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DetailCardComponent } from './cards/detail-card/detail-card.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'movie-detail/:id', component: MovieDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
