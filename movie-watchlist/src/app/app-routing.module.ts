import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WatchListPageComponent } from './pages/watch-list-page/watch-list-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'movie-detail/:id', component: MovieDetailPageComponent },
  { path: 'movie-detail/:id/watch-list', component: WatchListPageComponent },
  { path: 'watch-list', component: WatchListPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
