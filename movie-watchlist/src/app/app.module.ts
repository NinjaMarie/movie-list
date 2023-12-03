import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './cards/movie-card/movie-card.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailCardComponent } from './cards/detail-card/detail-card.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { MovieListCardComponent } from './cards/movie-list-card/movie-list-card.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WatchListCardComponent } from './cards/watch-list-card/watch-list-card.component';
import { WatchListPageComponent } from './pages/watch-list-page/watch-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    LandingPageComponent,
    DetailCardComponent,
    MovieDetailPageComponent,
    MovieListCardComponent,
    PageNotFoundComponent,
    WatchListCardComponent,
    WatchListPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
