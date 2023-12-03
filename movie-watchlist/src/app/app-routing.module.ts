import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardComponent } from './cards/movie-card/movie-card.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DetailCardComponent } from './cards/detail-card/detail-card.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WatchListCardComponent } from './cards/watch-list-card/watch-list-card.component';
import { WatchListPageComponent } from './pages/watch-list-page/watch-list-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'movie-detail/:id', component: MovieDetailPageComponent },
  { path: 'movie-detail/:id/watch-list', component: WatchListPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
